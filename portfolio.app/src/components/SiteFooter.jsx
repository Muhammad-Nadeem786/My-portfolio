import React from 'react';

function SectionContact() {
  return (
    <section className="site-section" id="section-contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5">
            <div className="section-heading text-center">
              <h2>Get <strong>In Touch</strong></h2>
            </div>
          </div>

          <div className="col-md-7 mb-5 mb-md-0">
            <form action="" className="site-form" aria-label="Contact Form">
              <h3 className="mb-5">Get In Touch</h3>
              <div className="form-group">
                <input type="text" className="form-control px-3 py-4" placeholder="Your Name" aria-label="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control px-3 py-4" placeholder="Your Email" aria-label="Your Email" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control px-3 py-4" placeholder="Your Phone" aria-label="Your Phone" />
              </div>
              <div className="form-group mb-5">
                <textarea className="form-control px-3 py-4" cols="30" rows="10" placeholder="Write a Message" aria-label="Write a Message"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-primary px-4 py-3" value="Send Message" />
              </div>
            </form>
          </div>
          <div className="col-md-5 pl-md-5">
            <h3 className="mb-5">My Contact Details</h3>
            <ul className="site-contact-details">
              <li>
                <span className="text-uppercase">Email</span>
                nadeemmomeni77@gmail.com
              </li>
              <li>
                <span className="text-uppercase">Phone</span>
                03554254827
              </li>
              <li>
                <span className="text-uppercase">phone</span>
                03421713449
              </li>
              <li>
                <span className="text-uppercase">Address</span>
                District shigar <br />
                Tissar shigar thamacho<br/>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionContact;
