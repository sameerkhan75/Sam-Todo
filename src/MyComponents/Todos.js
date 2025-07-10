import React from 'react';
import TodoItems from './TodoItems';

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="my-3">Todo List</h3>

      {props.todos.length === 0 ? (
        "Great, You have completed all your tasks time to relax"
      ) : (
        <div className="todo-container">
          {props.todos.map((todo) => (
            <div className="todo-item" key={todo.sno}>
              <TodoItems todo={todo} onDelete={props.onDelete} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Todos;
