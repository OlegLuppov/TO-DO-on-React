import React from 'react'
import { Box, Typography } from '@mui/material'

export const AboutPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <Typography variant="h4">Инструкция</Typography>
      <Typography sx={{ textAlign: 'center' }} variant="body2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores distinctio enim deleniti
        dolor ullam similique earum, eos repudiandae fugit dicta.
      </Typography>
    </Box>
  )
}
