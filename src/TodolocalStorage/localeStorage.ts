import { ITodo } from '../interfaces/interfaces'

export const saveToLocalStorage =  <T extends string,U extends ITodo[] | ''> (key:T,value:U):void => localStorage.setItem(key,JSON.stringify(value))
export const getLocalStorage = (key:string) => JSON.parse(localStorage.getItem(key) || '[]')


