import { useState, useEffect } from 'react';

export function useNavbarHeight() {
  // set default value to 0
  const [navbarHeight, setNavbarHeigh] = useState(0);

  useEffect(() => {

    // define a function to get the navbarHeight
    function updateNavbarHeight() {
      const navbar = document.getElementById('navbar');
      if(navbar) {
        setNavbarHeigh(navbar.offsetHeight);
      }
    }

    // get the navbarHeight
    updateNavbarHeight();
    // get the navbarHeight again if screen size changes
    window.addEventListener('resize', updateNavbarHeight);

    return () => window.removeEventListener('resize', updateNavbarHeight);

  }, []);

  return navbarHeight;
}