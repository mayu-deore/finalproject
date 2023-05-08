import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-main-div'>
        <div className='navbar-width-div'>
            <div className='navbar-content-div'>
               <div>
                <h3 git init>Home</h3>
               </div>
               
               <div className='second-content-div'>
               <div>
               <h3 style={{margin:'0px'}}>About</h3>
               </div>

               <div>
               <h3 style={{margin:'0px'}}>Contact</h3>
               </div>

               <div>
               <h3 style={{margin:'0px'}}>MMD</h3>
               </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar