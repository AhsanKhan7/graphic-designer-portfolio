import React from 'react'
import { Link, Route } from 'react-router-dom'

const Header = () => {
    
    return ( 
    
        <div className='header' >
            <h3  className='title' > Name</h3>
            <h3 className='project'>Projects</h3>
            <h3  className='about'>About</h3>
            <h3 className='contact'>Contact</h3>
            <h5 className='tag'>Hard work pay off</h5>
        </div>
       
    )
}

export default Header