import React from 'react'
import tex1 from '../../public/images/tex1.jpg'
import tex2 from '../../public/images/tex2.jpg'
import tex3 from '../../public/images/tex3.jpg'
import tex4 from '../../public/images/tex4.jpg'

const TexPage = () => {
    return (
        <div >
            <div className='header-tex' >
                <h3  className='title-tex' > Name</h3>
                <h3 className='project-tex'>Projects</h3>
                <h3  className='about-tex'>About</h3>
                <h3 className='contact-tex'>Contact</h3>
                <h5 className='tag-tex'>Hard work pay off</h5>
            </div>

        <div className='texPage'>
        
            <div className='pic1'>
                <img src={tex1} alt='pic1'/>
            </div>
            <div className='pic2'>
                <img src={tex2} alt='pic2'/>
            </div>
            <div className='pic3'>
                <img src={tex3} alt='pic3'/>
            </div>
            <div className='pic4'>
                <img src={tex4} alt='pic4'/>
            </div>
        
        </div>

    </div>
    )
}

export default TexPage