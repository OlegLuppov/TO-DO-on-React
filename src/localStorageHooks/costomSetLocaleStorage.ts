import { useState } from 'react'

const useSetLocalStorage = <T extends string, U extends []>(key:T, value:U) => {
  const [data, setData] = useState(localStorage.setItem(key, JSON.stringify(value)))

  return { data, changeSetLocal: (key:T, value:U) => setData(localStorage.setItem(key, JSON.stringify(value))) }
}

export default useSetLocalStorage
