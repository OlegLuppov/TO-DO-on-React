import { useState } from 'react'

function useSetLocalStorage(key, value) {
  const [data, setData] = useState(localStorage.setItem(key, JSON.stringify(value)))

  return { data, changeSetLocal: (key, value) => setData(localStorage.setItem(key, JSON.stringify(value))) }
}

export default useSetLocalStorage
