import React from 'react';

const TodoItems = ({ todo, onDelete }) => {
  return (
    <div className="my-3">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      
      {todo.img && (
        <img
          src={todo.img}
          alt="todo"
          style={{
            width: '120px',
            height: '120px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '10px'
          }}
        />
      )}
      
      <br />
      <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>
        Done
      </button>
      <hr />
    </div>
  );
};

export default TodoItems;
