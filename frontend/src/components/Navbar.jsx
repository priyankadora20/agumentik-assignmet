import React from 'react'
import "../styles/navbar.css"
const Navbar = () => {
  return (
      <>
          <div id='navbar'>
          <img id="navimg" src="https://www.golakshadweep.com/assets/new-theme/img/logo1.png" alt="logo" />
          
          <div id='navbar-a'>
              
          <div>Find Reservations</div>
          <div>Packages</div>
          <div>About Lakshadweep</div>
          <div>About Us</div>
          <div>Gol</div>
          <div>Support</div>
              
          </div>

          <div id='navbar-b'>

              
              <button id='navbar-btn-a'>Login</button>
              <button id='navbar-btn-b'>Signup</button>

              
              </div>
              </div>

      </>
  )
}

export default Navbar

