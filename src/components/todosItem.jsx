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
      listTodos.push({ todo: value, id: new Date().getMilliseconds(), background: { backgroundColor: '' } })
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
    listTodos.forEach((elem) => {
      if (+e.target.closest('.todo').id !== elem.id) {
        newListTodos.push(elem)
      }
    })
    setLocaleStorage('Oleg', newListTodos)
    listTodos = JSON.parse(localStorage.getItem('Oleg'))
    setList(listTodos)
  }

  const handleDoneTodos = (e) => {
    let newListTodos = []
    listTodos.forEach((elem) => {
      if (elem.id === +e.target.closest('.todo').id) {
        elem.background = { backgroundColor: 'green' }
        newListTodos = [...newListTodos, ...listTodos]
      }
    })
    setLocaleStorage('Oleg', newListTodos)
    listTodos = JSON.parse(localStorage.getItem('Oleg'))
    setList(listTodos)
  }

  return (
    <>
      <InputField value={value} onChange={(e) => setValue(e.target.value)} onClick={handlerAddToDos} />
      <ul className="list__todos">
        <ToDoList todos={list} onClickDelete={deleteTodos} onClickDone={handleDoneTodos} />
      </ul>
    </>
  )
}

const container = document.querySelector('.container')
const root = createRoot(container)
root.render(<ToDoItem />)
