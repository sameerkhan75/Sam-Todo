import React from 'react'
import TodoItems from './TodoItems'

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="my-3">Todo List</h3>

      {props.todos.length === 0
        ? "Great,You have completed all your tasks "
        : props.todos.map(todo => (
            <TodoItems
              todo={todo}
              key={todo.sno}
              onDelete={props.onDelete}
            />
          ))
      }

    </div>
  )
}

export default Todos
