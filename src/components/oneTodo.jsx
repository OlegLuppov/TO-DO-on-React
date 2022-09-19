import React from 'react'

const TodoList = (props) => {
  return props.list.map((todo) => (
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
}

export default TodoList
