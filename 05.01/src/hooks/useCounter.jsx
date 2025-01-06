import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const useCounter = () => {
    const [count, setcount] = useLocalStorage("count", 0)
    function inc(){
        setcount(count+1)
    }
    function dec(){
        setcount(count-1)
    }
  return [count, inc, dec]
}

export default useCounter
