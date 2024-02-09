import React from 'react'
import '../styles/header.css'
import logo from '../assets/moneybag.png'

export default function Header() {
  return (
    <>
    <div className='header'>
        <img src={logo} alt="" />
        Calculte investment
    </div>
    
    </>
  )
}
