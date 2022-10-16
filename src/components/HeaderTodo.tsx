import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Typography, List, ListItem } from '@mui/material'

export const HeaderTodo: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: '#e57373',
        p: '1rem',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="h6" color="inherit" component="span">
        Список дел
      </Typography>
      <List>
        <ListItem
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '0',
            ['@media (max-width:600px)']: { flexDirection: 'column' },
          }}
        >
          <NavLink to={'/home'}>Домой</NavLink>
          <NavLink to={'/about'}>Инструкция</NavLink>
          <NavLink to={'/todos'}>В приложение</NavLink>
        </ListItem>
      </List>
    </AppBar>
  )
}
