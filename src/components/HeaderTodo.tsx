import React from 'react'
import { AppBar, Typography } from '@mui/material'

export const HeaderTodo: React.FC = () => {
  return (
    <AppBar position="static" sx={{ background: '#e57373', p: '1rem' }}>
      <Typography variant="h6" color="inherit" component="span">
        Список дел
      </Typography>
    </AppBar>
  )
}
