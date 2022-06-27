import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar=()=>{
    return (
        <nav>
            <NavLink to ='/'>Home</NavLink>
            <NavLink to ='/about'>About</NavLink>
            <NavLink to ='/Products'>Products</NavLink>
        </nav>
    )
}

export default Navbar