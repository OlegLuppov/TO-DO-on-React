import { useState } from 'react'

const useGetLocaleStorage = (key) => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem(key)))

  return {
    data,
    changeGetLocal: (key) => setData(JSON.parse(localStorage.getItem(key))),
  }
}

export default useGetLocaleStorage
