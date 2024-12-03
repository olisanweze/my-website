import React, { useEffect, useRef, useState } from 'react';
import {ReactTyped as Typed} from 'react-typed';
import Skills from './Skills';

function Article() {
  const [isTyping, setIsTyping] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const articleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTyping(true);
          observer.disconnect(); // Disconnect after triggering once
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (articleRef.current) {
      observer.observe(articleRef.current);
    }

    return () => {
      if (articleRef.current) {
        observer.unobserve(articleRef.current);
      }
    };
  }, []);

  return (
    <section className='article-section'>
      <article id="about" className="about" ref={articleRef}>
        <div className="container">
          <h2>About Me</h2>
          <p>
            {isTyping && !isTypingComplete && (
              <Typed
                strings={[
                  'Hello! My name is Olisa Nweze. I am a software developer based in Winnipeg. I am currently enrolled in the Software Developer Program at MITT, Winnipeg. I have experience working with Front-End Technologies like HTML, CSS, and JavaScript. I create high quality and modern web applications. I pay great attention to the little details, and I am well versed in deploying various programming languages to provide solutions for you. Some technologies I work with include:' 
                ]}
                typeSpeed={80}
                backSpeed={30}
                onComplete={() => setIsTypingComplete(true)}
                className="about"
              />
            )}
            {isTypingComplete && (
              'Hello! My name is Olisa Nweze. I am a software developer based in Winnipeg. I am currently enrolled in the Software Developer Program at MITT, Winnipeg. I have experience working with Front-End Technologies like HTML, CSS, and JavaScript. I create high quality and modern web applications. I pay great attention to the little details, and I am well versed in deploying various programming languages to provide solutions for you. Some technologies I work with include:'
            )}
          </p>
          {isTypingComplete && <Skills className={`skills-tech ${isTypingComplete ? 'show' : ''}`} />}
        </div>
      </article>
    </section>
  );
}

export default Article;
