import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAdminContext from './context/AdminLogin'

function Protected({children}) {

  const navigate = useNavigate()
  const {isAuthorised} = useAdminContext()

  useEffect(()=> {
    if(!isAuthorised) {
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
