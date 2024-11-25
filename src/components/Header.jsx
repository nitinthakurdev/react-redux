import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='border-b py-4 flex w-full items-center justify-center gap-5 ' >
        <Link to="/" > Post</Link>
        <Link to="/create"  >Create Post</Link>
        <input className='border-2 rounded-md w-96 h-10 px-3 ' placeholder='search '  />
    </header>

  )
}

export default Header