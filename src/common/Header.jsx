import React from 'react';
import { Link } from 'wouter';
import { useState } from 'react';
const Header = props =>{

  return(
    <header>
      <Link to='/'>Логотип</Link>
      <Link to='/page1'>Страница 1</Link>
      <Link to='/page2'>Страница 2</Link>
      <Link to='/memory'>Про память</Link>
    </header>
  )
}
export {Header}
