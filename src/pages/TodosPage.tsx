import React, { useEffect } from 'react'
import { Box, Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { InputField } from '../components/TodoInputField'
import { TodoList } from '../components/TodoList'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addTodo, changeValue } from '../store/slice'
import { Todo } from '../store/slice'
import { saveToLocalStorage, getLocalStorage } from '../TodolocalStorage/localeStorage'

export const TodosPage: React.FC = () => {
  const value = useAppSelector((state) => state.todos.value)
  const list = useAppSelector((state) => state.todos.list)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const saved = getLocalStorage('My todos') as Todo[]
    dispatch(addTodo(saved))
  }, [])

  useEffect(() => {
    saveToLocalStorage('My todos', list)
  }, [list])

  const newList = {
    value: value,
    id: new Date().getMilliseconds(),
    completed: false,
    decoration: 'none',
  }

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeValue(e.target.value))
  }

  const addTodoHandler = () => {
    dispatch(addTodo([newList, ...list]))
    dispatch(changeValue(''))
  }

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      dispatch(addTodo([newList, ...list]))
      dispatch(changeValue(''))
    }
  }

  return (
    <React.Fragment>
      <Box
        sx={{
          p: '1rem',
          width: '80%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: ' space-around',
          ['@media (max-width:1000px)']: { gap: '1rem' },
        }}
      >
        <InputField value={value} onChange={inputChangeHandler} onKeyPress={keyPressHandler} />
        <Button
          onClick={addTodoHandler}
          startIcon={<CheckIcon />}
          variant="contained"
          size="small"
          sx={{ mt: '1.2rem' }}
        >
          добавьте дело
        </Button>
      </Box>
      <TodoList todos={list} />
    </React.Fragment>
  )
}
