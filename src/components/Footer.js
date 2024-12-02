import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className="container">
          <div className="flex-center center">
              <ul className="list flex">
                  <li>
                      <a href="https://github.com/olisanweze" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faGithub} className="fa-socials"/> 
                      </a>
                  </li>
                  <li>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faLinkedin} className="fa-socials"/>
                      </a>
                  </li>
              </ul>
          </div> 
          <p className="copyright center">
              Designed by Olisa Nweze &copy; All rights reserved
          </p>
      </div>
    </footer>
  )
}
  
export default Footer;