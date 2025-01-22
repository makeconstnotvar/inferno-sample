import React from 'react';
import {Link} from "wouter";

const Header = props => {
  return (
    <header className='flex-row gap-20'>
      <Link to='/'>root</Link>
      <Link to='/characters'>characters</Link>
      <Link to='/locations'>locations</Link>
      <Link to='/episodes'>episodes</Link>
      <Link to='/letters'>letters</Link>
    </header>
  )
}
export {Header}
