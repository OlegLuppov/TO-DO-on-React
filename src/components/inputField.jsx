import React from 'react'

const InputField = ({ onClick, value, onChange }) => {
  return (
    <form className="todos">
      <input type="text" placeholder="[Write down your todos]" value={value} onChange={onChange} />
      <button className="todos__button" type="button" onClick={onClick}>
        Add todo
      </button>
    </form>
  )
}

export default InputField
