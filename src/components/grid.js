import React from 'react'
import { Link, Router } from 'react-router-dom'

const Grid = () => {
    return (

        <div className='grid1'>
       
            <div className="grid">
              <div className="item item--large">
                <div className="item__details">
                  Mobile
                </div>
                <Link className='toMobile' to='/mobilepage'>EXPLORE</Link>
              </div>
              
              <div className="item item--medium">
                <div className="item__details">
                  Educational Print
                </div>
                <Link className='toEdu' to='/edupage'>EXPLORE</Link>
              </div>

              <div className="item item--large">
                <div className="item__details">
                  Textile
                </div>
                <Link className='toTex' to='/texpage'>EXPLORE</Link>
              </div>

              <div className="item item--full">
                <div className="item__details">
                  My Creativity
                </div>
                <Link className='toAbout' to='/about'>EXPLORE</Link>
              </div>
        
              <div className="item">
                <div className="item__details">
                  Masks
                </div>
                <Link className='toMask' to='/maskpage'>EXPLORE</Link>
              </div>
            
            </div>
        </div>
        
    )
}

export default Grid