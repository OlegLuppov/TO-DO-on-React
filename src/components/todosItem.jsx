import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import ToDoList from './todosOne.jsx'
import InputField from './inputField.jsx'
import useSetLocalStorage from './localStorageHooks/costomSetLocaleStorage.jsx'
import useGetLocaleStorage from './localStorageHooks/costomGetLocalStorage.jsx'

const Kate = []
const ToDoItem = () => {
  const [list, setList] = useState([])
  const { changeSetLocal } = useSetLocalStorage()
  const { data, changeGetLocal } = useGetLocaleStorage('Oleg')
  const [value, setValue] = useState('')

  const handlerAddToDos = (e) => {
    e.preventDefault()

    if (value !== '') {
      list.push({ todo: value, id: new Date().getMilliseconds(), background: { backgroundColor: '' } })
      changeSetLocal('Oleg', list)
      setList(list)
      setValue('')
      changeGetLocal('Oleg')
    }
  }

  useEffect(() => {
    if (localStorage.getItem('Oleg')) {
      setList([...data])
    }
  }, [data])

  const deleteTodos = (e) => {
    let newListTodos = []
    list.forEach((elem) => {
      if (+e.target.closest('.todo').id !== elem.id) {
        newListTodos.push(elem)
      }
    })
    changeSetLocal('Oleg', newListTodos)
    changeGetLocal('Oleg')
    setList(data)
  }

  const handleDoneTodos = (e) => {
    let newListTodos = []
    list.forEach((elem) => {
      if (elem.id === +e.target.closest('.todo').id) {
        elem.background = { backgroundColor: 'green' }
        newListTodos = [...newListTodos, ...list]
      }
    })
    changeSetLocal('Oleg', newListTodos)
    changeGetLocal('Oleg')
    setList(data)
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
