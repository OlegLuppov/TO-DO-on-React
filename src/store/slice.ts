import { createSlice,PayloadAction } from '@reduxjs/toolkit'

export type Todo = {
  value: string
  list?:Todo[]
  id:string,
  completed:boolean
  decoration:string 
}

const mySlices = createSlice({
  name: 'todos',
  initialState:<Todo> {
    value:'',
    list:[],
    id: new Date().getUTCMilliseconds().toString(),
    completed:false,
    decoration:'none'
  },
  reducers: {
    AddTodo:(state, action:PayloadAction<Todo[]>) => {
      state.list = action.payload
    },
    ChangeValue: (state, action:PayloadAction<string>) => {
      state.value = action.payload
    },
    changeTextDecoration:(state,action:PayloadAction<string>) => {
    state.decoration = action.payload
    }
  },
})

export const {AddTodo, ChangeValue, changeTextDecoration} = mySlices.actions
export default mySlices.reducer
