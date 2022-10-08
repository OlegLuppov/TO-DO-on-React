import { configureStore } from '@reduxjs/toolkit'
import todoReduser from './slice'

 const store = configureStore({
  reducer: {
    todos: todoReduser,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
