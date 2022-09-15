import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import ToDoList from './todosOne.jsx'
import InputField from './inputField.jsx'

const setLocaleStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

let listTodos = []

const ToDoItem = () => {
  const [list, setList] = useState(listTodos)
  const [value, setValue] = useState('')

  const handlerAddToDos = (e) => {
    e.preventDefault()

    if (value !== '') {
      listTodos.push({ todo: value, id: new Date().getMilliseconds() })
      setList(listTodos)
      setValue('')
      setLocaleStorage('Oleg', listTodos)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('Oleg')) {
      listTodos = [...listTodos, ...JSON.parse(localStorage.getItem('Oleg'))]
      setList(listTodos)
    }
  }, [])

  const deleteTodos = (e) => {
    let newListTodos = []

    for (let i = 0; i < listTodos.length; i++) {
      if (+e.target.closest('.todo').id !== listTodos[i].id) {
        newListTodos.push(listTodos[i])
      }
    }
    setLocaleStorage('Oleg', newListTodos)
    listTodos = JSON.parse(localStorage.getItem('Oleg'))
    setList(listTodos)
  }

  const doneTodos = (e) => {
    console.log(e.target.closest('.todo'))
    e.target.closest('.todo').style.backgroundColor = 'green'
  }

  return (
    <>
      <InputField value={value} onChange={(e) => setValue(e.target.value)} onClick={handlerAddToDos} />
      <ul className="list__todos">
        <ToDoList todos={list} onClickDelete={deleteTodos} onClickDone={doneTodos} />
      </ul>
    </>
  )
}

const container = document.querySelector('.container')
const root = createRoot(container)
root.render(<ToDoItem />)
