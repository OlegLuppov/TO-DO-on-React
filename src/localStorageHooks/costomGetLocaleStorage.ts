import React, { useState } from 'react'

const useGetLocaleStorage = <T extends string>(key:T) => {
  const [getData, setData] = useState(JSON.parse(localStorage.getItem(key) || '[]'))

  return {
    getData,
    changeGetLocal: (key:T) => setData(JSON.parse(localStorage.getItem(key) || '[]')),
  }
}

export default useGetLocaleStorage
