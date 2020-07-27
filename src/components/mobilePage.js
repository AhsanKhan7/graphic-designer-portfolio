import React from 'react'
import mobile1 from '../../public/images/mobile1.jpg'
import mobile2 from '../../public/images/mobile2.jpg'
import mobile3 from '../../public/images/mobile3.jpg'
import mobile4 from '../../public/images/mobile4.jpg'

const MobilePage = () => {
    return (
        <div >

            <div className='header-mob' >
                <h3  className='title-mob' > Name</h3>
                <h3 className='project-mob'>Projects</h3>
                <h3  className='about-mob'>About</h3>
                <h3 className='contact-mob'>Contact</h3>
                <h5 className='tag-mob'>Hard work pay off</h5>
            </div>

            <div className='mobilePage'>
            
                <div className='pic1'>
                    <img src={mobile1} alt='pic1'/>
                </div>
                <div className='pic2'>
                    <img src={mobile2} alt='pic2'/>
                </div>
                <div className='pic3'>
                    <img src={mobile3} alt='pic3'/>
                </div>
                <div className='pic4'>
                    <img src={mobile4} alt='pic4'/>
                </div>
            
            </div>

        </div>
    )
}

export default MobilePage