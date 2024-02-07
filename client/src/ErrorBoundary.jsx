import React from 'react'
import { Link } from 'react-router-dom'

const ErrorBoundary = () => {
  return (
    <div className='flex place-content-center place-items-center h-[calc(100vh-98px)] box-border'>
      We encountered an error. Please proceed to the <br/><Link to='/'>home page and try again.</Link>
    </div>
  )
}

export default ErrorBoundary