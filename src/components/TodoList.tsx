import React from 'react'
import { Checkbox, List, ListItem, ListItemText, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { ITodoList } from '../interfaces/interfaces'
import { useAppDispatch } from '../store/hooks'
import { changeChecked, removeTodo } from '../store/slice'

export const TodoList: React.FC<ITodoList> = ({ todos }) => {
  const dispatch = useAppDispatch()

  return (
    <List
      sx={{
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3em',
      }}
    >
      {todos.map((todo) => {
        return (
          <ListItem
            key={todo.id}
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              backgroundColor: 'rgb(245, 245, 245)',
            }}
          >
            <Checkbox
              onChange={() => dispatch(changeChecked(todo.id))}
              checked={todo.completed}
              sx={{
                color: 'green',
                '&.Mui-checked': { color: 'green' },
              }}
            />
            <ListItemText
              sx={{
                textDecoration: `${todo.decoration}`,
                wordWrap: ' break-word',
              }}
            >
              {todo.value}
            </ListItemText>
            <IconButton onClick={() => dispatch(removeTodo(todo.id))}>
              <DeleteIcon sx={{ color: 'red' }} />
            </IconButton>
          </ListItem>
        )
      })}
    </List>
  )
}
