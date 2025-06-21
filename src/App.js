import logo from './mol.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import TodoItems from "./MyComponents/TodoItems";
import Todos from "./MyComponents/Todos";
import react, {useState,useEffect} from 'react';
import AddTodo from "./MyComponents/AddTodo";
import {About} from "./MyComponents/About";


import { BrowserRouter, Route, Router } from "react-router";
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  } 
  const onDelete=(todo)=>{
    console.log("i am ondelete of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.getItem("todos",JSON.stringify(todos));

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

  const [todos, setTodos]=useState(initTodo);
      useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
    },[todos])

  return (<>
  <Router>

  <Header title="MyTodosList" searchbar={true}/>
  <Switch>
    <Route path="/" render={()=>{
      return(
      <>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>  
      </>)
    }}>

    </Route>
    <Route path="/about">
    <About/>
    </Route>
  </Switch>




  <Footer/>
  </Router>
</>
  );
}

export default App;
