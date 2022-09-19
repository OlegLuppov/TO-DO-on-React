import { createSlice } from '@reduxjs/toolkit'

const mySlices = createSlice({
  name: 'todos',
  initialState: {
    value: '',
    list: [],
  },
  reducers: {
    AddTodo: (state, action) => {
      state.list = action.payload
    },
    ChangeValue: (state, action) => {
      state.value = action.payload
    },
    ChangeBackground: (state, action) => {
      state.background = action.payload
    },
  },
})

export const { AddTodo, ChangeValue, ChangeBackground } = mySlices.actions
export default mySlices.reducer
