import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

export default function () {
  return (
    <div>
        <header>
            <nav>
                <ul>
                    <NavLink to='/' className={({isActive})=>(isActive?'active':'link')} >Home</NavLink>
                    <NavLink to='/products' className={({isActive})=>(isActive?'active':'link')}>Products</NavLink>
                </ul>
            </nav>
        </header>
    </div>
  )
}
