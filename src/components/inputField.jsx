import React from 'react'

const InputField = ({ onClick, value, onChange }) => {
  return (
    <form className="todos">
      <input type="text" placeholder="write down your todos" value={value} onChange={onChange} />
      <button type="button" onClick={onClick}>
        Add to-do
      </button>
    </form>
  )
}

export default InputField
