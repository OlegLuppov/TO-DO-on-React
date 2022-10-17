export interface ITodo  {
    value: string
    id:number,
    completed:boolean
    decoration:string 
  }

  export interface ITodoList {
    todos: ITodo[]
  }

 export interface IInputFieldProps {
    value: string
    onChange(e: React.ChangeEvent<HTMLInputElement>): void
    onKeyPress(e: React.KeyboardEvent): void
  }