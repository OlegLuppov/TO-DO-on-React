import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import ToDoList from './todosOne.jsx'
import InputField from './inputField.jsx'

const setLocaleStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

let listTodos = []
let a = document.querySelectorAll('.todo')

const ToDoItem = () => {
  const [list, setList] = useState(listTodos)
  const [value, setValue] = useState('')

  const handlerAddToDos = (e) => {
    e.preventDefault()

    if (value !== '') {
      listTodos.push({ todo: value, id: new Date().getMilliseconds(), background: '' })
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
    window.addEventListener('load', () => {
      let list = document.querySelectorAll('.todo')
      const arr = JSON.parse(localStorage.getItem('Oleg'))
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < list.length; j++) {
          if (+arr[i].id === +list[j].id) {
            list[j].style.backgroundColor = arr[i].background
          }
        }
      }
    })
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

  const handleDoneTodos = (e) => {
    for (let i = 0; i < listTodos.length; i++) {
      if (listTodos[i].id === +e.target.closest('.todo').id) {
        listTodos[i].background = 'green'
        setLocaleStorage('Oleg', listTodos)
      }
    }
    e.target.closest('.todo').style.backgroundColor = 'green'
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
