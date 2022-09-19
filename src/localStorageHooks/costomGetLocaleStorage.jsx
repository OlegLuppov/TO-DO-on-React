import { useState } from 'react'

const useGetLocaleStorage = (key) => {
  const [getData, setData] = useState(JSON.parse(localStorage.getItem(key)))

  return {
    getData,
    changeGetLocal: (key) => setData(JSON.parse(localStorage.getItem(key))),
  }
}

export default useGetLocaleStorage
