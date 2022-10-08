import { createSlice,PayloadAction } from '@reduxjs/toolkit'

type Todo = {
  value: string
  id:string,
  background:string
}

type TodosState = {
  value:string
  list:Todo[]
  background:string

}

const initialState:TodosState = {
  value:'',
  list:[],
  background:''
}

const mySlices = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    AddTodo:(state, action:PayloadAction<Todo[]>) => {
      state.list = action.payload
    },
    ChangeValue: (state, action:PayloadAction<string>) => {
      state.value = action.payload
    },
    ChangeBackground:(state, action:PayloadAction<string>) =>  {
       
     state.background = action.payload
    },
  },
})

export const { AddTodo, ChangeValue, ChangeBackground } = mySlices.actions
export default mySlices.reducer
