import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const [repos, setRepos] = useState([]);
  const projectUrls = [
    'https://olisanweze.github.io/jobs-pool/',
    'https://fashion-fusion-store.netlify.app/',
    'https://github-finder-olisanweze.netlify.app/',
    'https://olisanweze.github.io/todo/',
    'https://olisanweze.github.io/gourmet-express/',
    'https://olisanweze.github.io/typepacer/',
    'https://olisanweze.github.io/fakebook/',
    'https://olisanweze.github.io/we-deliver/',
    'https://olisanweze.github.io/moviex/',
    'https://olisanweze.github.io/guessing-game/',
    'https://olisanweze.github.io/card-memory-game/',
    'https://olisanweze.github.io/car-rental/',
    'https://olisanweze.github.io/client-detection/'
  ];

  const getProjectName = (url) => { // Extract the project name from the URL 
    const urlParts = url.split('/'); return urlParts[urlParts.length - 2]; };

  useEffect(() => {
    fetch('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching repos:', error));
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 projects at a time
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 project at a time on small screens
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 projects at a time on medium screens
        }
      }
    ]
  };

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className='container'>
      <Slider {...settings}>
        {projectUrls.map((url, index) => (
          <div key={index} className="project">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={`https://api.microlink.io/?url=${url}&screenshot=true&embed=screenshot.url`} alt={`Project ${index + 1}`} />
              <h3>{getProjectName(url)}</h3>
            </a>
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
}

export default Projects;
