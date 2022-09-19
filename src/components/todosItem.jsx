import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddTodo, ChangeValue } from '../store/slice'
import useSetLocaleStorage from '../localStorageHooks/costomSetLocaleStorage.jsx'
import useGetLocaleStorage from '../localStorageHooks/costomGetLocaleStorage.jsx'

import InputField from './inputField.jsx'
import TodoList from './oneTodo.jsx'

let arrTodos = []
const ToDoItem = () => {
  const value = useSelector((state) => state.todo.value)
  const list = useSelector((state) => state.todo.list)
  const { changeSetLocal } = useSetLocaleStorage()
  const { getData, changeGetLocal } = useGetLocaleStorage('My todos')
  const dispatch = useDispatch()

  useEffect(() => {
    if (getData) {
      arrTodos = [...getData]
      dispatch(AddTodo([...getData]))
    }
  }, [getData])

  const changeValue = (e) => dispatch(ChangeValue(e))
  const addTodo = () => {
    if (value) {
      arrTodos.push({ todo: value, id: new Date().getMilliseconds(), background: { backgroundColor: '' } })
      dispatch(AddTodo([...arrTodos]))
      dispatch(ChangeValue(''))
      changeSetLocal('My todos', arrTodos)
      changeGetLocal('My todos')
    }
  }

  const handlerDeleteTodos = (e) => {
    let newListTodos = []
    list.forEach((elem) => {
      if (+e.target.closest('.todo').id !== elem.id) {
        newListTodos.push(elem)
      }
    })
    changeSetLocal('My todos', newListTodos)
    changeGetLocal('My todos')
    dispatch(AddTodo([...getData]))
  }

  const handlerDoneTodos = (e) => {
    let newListTodos = []

    list.forEach((elem) => {
      if (elem.id === +e.target.closest('.todo').id) {
        let newElem = { todo: elem.todo, id: elem.id, background: { backgroundColor: 'green' } }
        newListTodos.push(newElem)
      }
      if (elem.id !== +e.target.closest('.todo').id) {
        newListTodos.push(elem)
      }
    })
    changeSetLocal('My todos', newListTodos)
    changeGetLocal('My todos')
    dispatch(AddTodo([...getData]))
  }

  return (
    <>
      <InputField
        value={value}
        onChange={(e) => {
          changeValue(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            addTodo()
          }
        }}
        onClick={(e) => {
          e.preventDefault(addTodo())
        }}
      />
      <ul className="list__todos">
        <TodoList list={list} onClickDone={handlerDoneTodos} onClickDelete={handlerDeleteTodos} />
      </ul>
    </>
  )
}

export default ToDoItem
