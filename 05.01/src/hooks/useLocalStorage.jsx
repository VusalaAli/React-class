import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
    const [value, setvalue] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) :defaultValue)
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
      }, [key, value]);
  return [value, setvalue]
}

export default useLocalStorage
