import React, { useEffect } from 'react'

import './ScrollAnimation.modules.css'

const ScrollAnimation = ({ children }) => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });  
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));       
    });


  return (
    <>
        {children}
    </>
  )
}

export default ScrollAnimation