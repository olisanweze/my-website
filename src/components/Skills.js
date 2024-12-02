import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faMicrosoft, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCogs, faDatabase } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (
    <ul className="flex space-between tech">
      <li><FontAwesomeIcon icon={faHtml5} className="fa-brands" /> HTML</li>
      <li><FontAwesomeIcon icon={faCss3Alt} className="fa-brands" /> CSS</li>
      <li><FontAwesomeIcon icon={faJs} className="fa-brands" /> JavaScript</li>
      <li><FontAwesomeIcon icon={faCogs} /> C#</li>
      <li><FontAwesomeIcon icon={faMicrosoft} className="fa-brands" /> .NET</li>
      <li><FontAwesomeIcon icon={faReact} className="fa-brands" /> React</li>
      <li><FontAwesomeIcon icon={faDatabase} className="fa-solid"/> MySQL</li>
    </ul>
  );
}

export default Skills;
