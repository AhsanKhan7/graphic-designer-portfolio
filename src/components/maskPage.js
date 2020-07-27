import React from 'react'
import mask2 from '../../public/images/mask2.jpg'
import mask3 from '../../public/images/mask3.jpg'

const MaskPage = () => {
    return (
        <div >
            
            <div className='header-mas' >
                <h3  className='title-mas' > Name</h3>
                <h3 className='project-mas'>Projects</h3>
                <h3  className='about-mas'>About</h3>
                <h3 className='contact-mas'>Contact</h3>
                <h5 className='tag-mas'>Hard work pay off</h5>
            </div>

        <div className='mask__details'>
        
            <div className='m2'>
                <img src={mask2} alt='pic2'/>
            </div>
            <div className='m3'>
                <img src={mask3} alt='pic3'/>
            </div>
        
        </div>
    </div>
    )
}

export default MaskPage