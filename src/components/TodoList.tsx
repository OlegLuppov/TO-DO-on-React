import React from 'react'
import { Checkbox, List, ListItem, ListItemText, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { Todo } from '../store/slice'
import { useAppDispatch } from '../store/hooks'
import { changeTextDecoration } from '../store/slice'

export const TodoList: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  const dispatch = useAppDispatch()
  return (
    <List sx={{ width: '90%' }}>
      {todos.map((todo) => {
        if (todo.completed) {
          dispatch(changeTextDecoration(' line-through red'))
        }

        return (
          <ListItem
            key={todo.id}
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <Checkbox
              checked={todo.completed}
              sx={{
                color: 'green',
                '&.Mui-checked': { color: 'green' },
              }}
            />
            <ListItemText sx={{ textDecoration: `${todo.decoration}` }}>{todo.value}</ListItemText>
            <IconButton>
              <DeleteIcon sx={{ color: 'red' }} />
            </IconButton>
          </ListItem>
        )
      })}
    </List>
  )
}
