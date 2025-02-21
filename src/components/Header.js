import React, { useEffect } from 'react';

function Header() {
  useEffect(() => {
    const menuButton = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav');
    const allLinks = document.querySelectorAll('.mobile-nav-link');

    allLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-active');
        menuButton.classList.remove('is-active');
      });
    });

    menuButton.addEventListener('click', function() {
      menuButton.classList.toggle('is-active');
      mobileMenu.classList.toggle('is-active');
    });

    // Cleanup event listeners on component unmount
    return () => {
      allLinks.forEach(link => {
        link.removeEventListener('click', () => {
          mobileMenu.classList.remove('is-active');
          menuButton.classList.remove('is-active');
        });
      });

      menuButton.removeEventListener('click', function() {
        menuButton.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
      });
    };
  }, []);

  const resumePath = process.env.PUBLIC_URL + '/olisaeloka_ejike_nweze_resume (1).pdf';

  return (
    <>
      <header>
        <div className='container flex'>
          <a href="#">
            <h1 className="animated-heading">Olisa Nweze</h1>
          </a>
          <nav>
            <ul className='display-flex'>
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">My Projects</a></li>
              <li><a href="#contact">Contact Me</a></li>
              <li><a href={resumePath} target="_blank" rel="noopener noreferrer">My Resume</a></li>
            </ul>
          </nav>
          <button className="hamburger">
            <div className="hamburger-bar"></div>
          </button>
        </div>
      </header>
      <nav className="mobile-nav">
        <ul>
          <li><a href="#about" className="mobile-nav-link">About Me</a></li>
          <li><a href="#projects" className="mobile-nav-link">My Projects</a></li>
          <li><a href="#contact" className="mobile-nav-link">Contact Me</a></li>
          <li><a href={resumePath} target="_blank" rel="noopener noreferrer" className="mobile-nav-link">My Resume</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
