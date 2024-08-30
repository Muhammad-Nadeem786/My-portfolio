import React from 'react'
import '../css/style.css'
import '../css/magnific-popup.css'
import '../css/flexslider.css'
import '../css/bootstrap.css'
import '../css/animate.css'
import '../css/bootstrap/bootstrap-grid.css'
import '../css/bootstrap/bootstrap-reboot.css'
import '../css/bootstrap/bootstrap.css'
import '../css/default-skin/default-skin.css'
import '../css/default-skin/default-skin.png'
import '../css/default-skin/default-skin.svg'
import '../css/default-skin/preloader.gif'
import '../css/_custom-settings.css'

// import "css/slick-carousel/slick/slick.css";
// import "css/slick-carousel/slick/slick-theme.css";
// import "css/bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "gray" }}>
      <nav className="navbar navbar-expand-lg site-navbar navbar-light bg-light" id="pb-navbar">
        <div className="container">
          <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarsExample09" 
            aria-controls="navbarsExample09" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div 
            className="collapse navbar-collapse" 
            id="navbarsExample09"
            style={{ display: 'flex', justifyContent: 'center',}}
          >
            <ul 
              className="navbar-nav" 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-evenly', // Space items evenly
                width: '100%', // Ensure the ul takes up full width
                margin: '0',
                padding: '0',
                textAlign: 'center', // Center text within each item
                alignItems:'center',
              }}
            >
              <li className="nav-item"><a className="nav-link" href="#section-home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#section-portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#section-resume">Resume</a></li>
              <li className="nav-item"><a className="nav-link" href="#section-about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#section-contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
