import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected({children}) {

    const navigate = useNavigate()

  useEffect(()=> {
    if(false) {
        navigate('/')
    }
  }, [])
  return (
    <>
      {children}
    </>
  )
}

export default Protected
