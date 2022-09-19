import React from 'react'

const InputField = (props) => {
  return (
    <form className="todos" role="presentation" onKeyDown={props.onKeyDown}>
      <input type="text" placeholder="[Write down your todos]" value={props.value} onChange={props.onChange} />
      <button className="todos__button" type="button" onClick={props.onClick}>
        Add todo
      </button>
    </form>
  )
}

export default InputField
