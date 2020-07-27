import React from 'react'
import Header from './header'
import graphic1 from '../../public/images/graphic1.jpg'

const EduPage = () => {
    return (
        <div >
            
            <div className='header-edu' >
                <h3  className='title-edu' > Name</h3>
                <h3 className='project-edu'>Projects</h3>
                <h3  className='about-edu'>About</h3>
                <h3 className='contact-edu'>Contact</h3>
                <h5 className='tag-edu'>Hard work pay off</h5>
            </div>

        <div className='eduPage'>
        
            <div className='pic1'>
                <img src={graphic1} alt='pic1'/>
            </div>
        
        </div>

    </div>
    )
}

export default EduPage