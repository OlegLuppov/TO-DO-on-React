import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from '../interfaces/interfaces'



const mySlices = createSlice({
  name: 'todos',
  initialState: {
 list:<ITodo[]>[],
 value:<string>''   
  },
  reducers: {
    addTodo:(state, action:PayloadAction<ITodo[]>) => {
    state.list = action.payload
    },
    changeValue: (state, action:PayloadAction<string>) => {
      state.value = action.payload
    },
    changeChecked:(state,action:PayloadAction<number>) => {
    state.list.find(todo => {
      if (todo.id === action.payload) {
 todo.completed = !todo.completed
 if (todo.completed) {
   todo.decoration = 'line-through red'
  } else {
   todo.decoration = 'none'
 }
      } 
    } 
      )
    },

    removeTodo: (state,action:PayloadAction<number>) => {
state.list = state.list.filter(todo => todo.id !== action.payload )
    },

  },
})

export const {addTodo, changeValue, changeChecked, removeTodo} = mySlices.actions
export default mySlices.reducer
