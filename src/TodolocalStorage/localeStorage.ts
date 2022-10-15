import { Todo } from "../store/slice"

export const saveToLocalStorage =  <T extends string,U extends Todo[] | ''> (key:T,value:U):void => localStorage.setItem(key,JSON.stringify(value))
export const getLocalStorage = (key:string) => JSON.parse(localStorage.getItem(key) || '[]')


