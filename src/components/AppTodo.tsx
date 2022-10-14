import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { ChangeValue } from '../store/slice'
import { Box, Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { HeaderTodo } from './HeaderTodo'
import { InputField } from './TodoInputField'
import { TodoList } from './TodoList'
import { AddTodo } from '../store/slice'
import { Todo } from '../store/slice'

export const AppTodo: React.FC = () => {
  const value = useAppSelector((state) => state.todos.value)
  const list = useAppSelector((state) => state.todos.list)
  const decoration = useAppSelector((state) => state.todos.decoration)
  const dispatch = useAppDispatch()

  const addTodoHandler = () => {
    const newTodo: Todo = {
      value: value,
      id: new Date().getUTCMilliseconds().toString(),
      completed: false,
      decoration: 'none',
    }
    dispatch(AddTodo([newTodo, ...list!]))
    dispatch(ChangeValue(''))
  }

  return (
    <>
      <HeaderTodo />
      <Box
        sx={{
          p: '1rem',
          width: '80%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: ' space-around',
          ['@media (min-height:600px)']: { gap: '1rem' },
        }}
      >
        <InputField value={value} onChange={(e) => dispatch(ChangeValue(e.target.value))} />
        <Button onClick={addTodoHandler} startIcon={<CheckIcon />} variant="contained" size="small" sx={{ mt: '1.2rem' }}>
          добавьте дело
        </Button>
      </Box>
      <TodoList todos={list!} />
    </>
  )
}
