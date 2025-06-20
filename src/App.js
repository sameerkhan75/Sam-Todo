import logo from './mol.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import TodoItems from "./MyComponents/TodoItems";
import Todos from "./MyComponents/Todos";
import react, {useState} from 'react';
import AddTodo from "./MyComponents/AddTodo"
function App() { 
  const onDelete=(todo)=>{
    console.log("i am ondelete of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))

  }
  const addTodo=(title,desc)=>{
    console.log("I am adding this todo",title, desc)
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{

      sno =  todos[todos.length-1].sno + 1;
    }
    const myTodo={
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos]=useState([
    {
      sno :1,
      title: "go to the market",
      desc:"you need to go to the market to get this job done"
    },
    {
      sno :2,
      title: "study",
      desc:"complete your assignment"
    },
    {
      sno :3,
      title: "exercise daily",
      desc:"workout to get in good shape"
    }
  ]);
  return (<>
  <Header title="MyTodosList" searchbar={true}/>
  <AddTodo addTodo={addTodo}/>
  <Todos todos={todos} onDelete={onDelete}/>
  <Footer/>
</>
  );
}

export default App;
