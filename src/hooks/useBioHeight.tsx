'use client';
import { useState, useEffect } from 'react';

export function useBioHeight() {
  // set default value to 0
  const [bioHeight, setBioHeigh] = useState(0);

  useEffect(() => {

    // define a function to get the navbarHeight
    function updateBioHeight() {
      const bio = document.getElementById('bio');
      if(bio) {
        setBioHeigh(bio.offsetHeight);
      }
    }

    // get the navbarHeight
    updateBioHeight();
    // get the navbarHeight again if screen size changes
    window.addEventListener('resize', updateBioHeight);

    return () => window.removeEventListener('resize', updateBioHeight);

  }, []);

  return bioHeight;
}