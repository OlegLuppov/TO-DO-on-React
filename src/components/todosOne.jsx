import React, { useState } from 'react'

const ToDoList = (props) =>
  props.todos.map((todo) => (
    <li className="todo" key={todo.id} id={todo.id}>
      {todo.todo}
      <div>
        <button type="button" onClick={props.onClickDone}>
          done
        </button>
        <button type="button" onClick={props.onClickDelete}>
          delete
        </button>
      </div>
    </li>
  ))

export default ToDoList
