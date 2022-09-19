import { configureStore } from '@reduxjs/toolkit'
import todoReduser from './slice'

const store = configureStore({
  reducer: {
    todo: todoReduser,
  },
})

export default store
