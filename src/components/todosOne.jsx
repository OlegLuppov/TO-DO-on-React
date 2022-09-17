import React, { useState } from 'react'

const ToDoList = (props) =>
  props.todos.map((todo) => (
    <li className="todo" key={todo.id} id={todo.id} style={todo.background}>
      {todo.todo}
      <div className="button__wrapper">
        <button className="button__done" type="button" onClick={props.onClickDone}>
          done
        </button>
        <button className="button__delete" type="button" onClick={props.onClickDelete}>
          delete
        </button>
      </div>
    </li>
  ))

export default ToDoList
