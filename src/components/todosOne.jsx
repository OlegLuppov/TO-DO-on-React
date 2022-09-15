import React, { useState } from 'react'

const ToDoList = ({ todos, onClick, id }) =>
  todos.map((todo) => (
    <li className="todo" key={todo.id} id={todo.id}>
      {todo.todo}
      <div>
        <button type="button">done</button>
        <button type="button" onClick={onClick}>
          delete
        </button>
      </div>
    </li>
  ))

export default ToDoList
