import logo from './mol.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import TodoItems from "./MyComponents/TodoItems";
import Todos from "./MyComponents/Todos";
import react, {useState} from 'react';
function App() { 
  const onDelete=(todo)=>{
    console.log("i am ondelete of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))

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
  <Todos todos={todos} onDelete={onDelete}/>
  <Footer/>
</>
  );
}

export default App;
