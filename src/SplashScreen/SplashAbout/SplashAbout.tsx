import React from 'react';
import './SplashAbout.css';
import {ReactComponent as Illustration} from '../../assets/splashScreen/v2/illustration3.svg';

function SplashAbout() {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <div className='splash-about-body container-1920 mx-auto' id="about">
        <div className='splash-about-content'>
          <h1>
            About Project Reclass
          </h1>
          <h3>
              Project Reclass is a Nonprofit Vocational Program teaching technical skills to incarcerated veterans based in
              Atlanta, Georgia. Out team of researchers, technologists, and educators has built this learning platform to deliver
              computer networking curriculum that will prepare users for the CompTIA Network+ Certification.
          </h3>
          <a href="https://www.projectreclass.org" style={{ marginTop: '1.5rem', display: 'block' }}>
            <button className='how-it-works'>
              <h3 className='splash-button-text'>Learn more</h3>
            </button>
          </a>
        </div>
        <div className='splash-about-image-container'>
          <Illustration />
        </div>
      </div>
    </div>
  );
}
// change

export default SplashAbout;
