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
      <Typography
        variant="h3"
        sx={{
          paddingBottom: '2rem',
        }}
      >
        Инструкция
      </Typography>
      <Typography sx={{ textAlign: 'center' }} variant="h4">
        1.Добавить дело:
      </Typography>
      <Typography sx={{ textAlign: 'center' }} variant="body1">
        - В верхнем правом углу страница нажмите вкладку "В приложение" <br />
        - Кликните по полю ввода "Введите дело"
        <br />- Введите свое дело и нажмите кнопку "Добавить дело" или клавишу "Enter" на клавиатуре{' '}
        <br />
      </Typography>
      <Typography sx={{ textAlign: 'center' }} variant="h4">
        2. Отметить как выполненное:
      </Typography>
      <Typography sx={{ textAlign: 'center' }} variant="body1">
        - Кликните на "Чекбокс" слева от выбранного вами дела, он станет зеленым и на нем появиться
        галочка, а также дело зачеркнется красной линией как выполненное.
      </Typography>
      <Typography sx={{ textAlign: 'center' }} variant="h4">
        3. Удалить дело:
      </Typography>
      <Typography sx={{ textAlign: 'center' }} variant="body1">
        - Нажмите на ярлык "Корзинки" справа от дела и оно удалиться.
      </Typography>
    </Box>
  )
}
