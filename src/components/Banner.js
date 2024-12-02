import React, { useState } from 'react';
import { ReactTyped as Typed } from 'react-typed';

function Banner() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  return (
    <>
      <section className='banner landing-page hero-content'>
        <div className='container banner-call hero-content-call'>
          <h2>Software Developer</h2>
          <p>
            <Typed
              strings={[
                'Transforming ideas into efficient solutions.',
                'Creating better software and business tools for you.'
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop={false}
              onComplete={handleTypingComplete}
              className="about"
            />
          </p>
          <div className="button-placeholder">
            <a href="#about" className={`button ${isTypingComplete ? 'show' : ''}`}>Read More</a>
          </div>
        </div>
      </section>
      <div className="empty"></div>
    </>
  );
}

export default Banner;
