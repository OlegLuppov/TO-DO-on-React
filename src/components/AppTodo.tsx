import React from 'react'
import { Box, Button } from '@mui/material'
import { HeaderTodo } from './HeaderTodo'
import { InputField } from './TodoInputField'

export const AppTodo: React.FC = () => {
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
        <InputField />
        <Button variant="contained" size="small" sx={{ mt: '1.2rem' }}>
          добавьте дело
        </Button>
      </Box>
    </>
  )
}
