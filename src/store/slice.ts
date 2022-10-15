import { createSlice,PayloadAction } from '@reduxjs/toolkit'

export interface Todo  {
  value: string
  id:number,
  completed:boolean
  decoration:string 
}

const mySlices = createSlice({
  name: 'todos',
  initialState: {
 list:<Todo[]>[],
 value:<string>''   
  },
  reducers: {
    addTodo:(state, action:PayloadAction<Todo[]>) => {
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
