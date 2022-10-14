import React from 'react'
import { TextField } from '@mui/material'

interface InputFieldProps {
  value: string
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

export const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      sx={{
        width: '80%',
        height: '1.5em',
        mb: '0',
        fontSize: 'calc(18px + (25 - 18) * (100vw - 400px) / (1920 - 400))',
        label: {
          color: 'rbg(0,0.5,0)',
          fontSize: 'calc(18px + (20 - 18) * (100vw - 400px) / (1920 - 400))',
        },

        '.MuiInput-underline:after': {
          borderColor: '#1976d2',
        },
        '.MuiInput-underline:before': {
          borderColor: '#1976d2',
        },
        ':hover .MuiInput-underline:after': {
          transform: 'rotateX(10deg)',
        },
        '& label.Mui-focused': {
          color: '#1976d2',
        },
      }}
      id="standard-basic"
      label="Введите дело"
      variant="standard"
    />
  )
}
