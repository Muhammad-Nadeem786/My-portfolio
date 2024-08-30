import React from 'react';

function Sitehero() {
  return (
    <div>
      <section 
        className="site-hero" 
        style={{ 
          backgroundImage: 'url(images/image_1.jpg)',
          backgroundSize: '65%', // or 'contain' based on your requirement
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat', // Prevent repeating the image
          
        }}
        id="section-home" 
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row intro-text align-items-center justify-content-center">
            <div className="col-md-10 text-center pt-5">
              <h1 className="site-heading site-animate">
                Hello, I'm <strong className="d-block">Muhammad Nadeem</strong>
              </h1>
              <strong className="d-block text-white text-uppercase letter-spacing">
                and this is My Resume
              </strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sitehero;
