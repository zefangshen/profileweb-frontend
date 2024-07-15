"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef} from 'react';

const NavbarClient = ({ data } ) => {
  // state controlling the the menu button 
  const [isNavMenuOpen, setNavMenuState] = useState(false);

  // function to toggle the menu open and close
  const toggleMenu = () => {
    setNavMenuState(!isNavMenuOpen);
  }

  // create a reference
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // close on outside click
  useEffect(() => {
    // event handler
    const handler = (e: MouseEvent) => {
      // menuRef.current, a null check, to make sure menuRef is defined.
      // first check the click is not on the toggle button
      if (menuButtonRef.current && !menuButtonRef.current.contains(e.target)) {
        // then check the click is outside the menu
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          if (isNavMenuOpen) setNavMenuState(false);
        }
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav id="navbar" className="navbar h-20 sm:h-16">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-black font-bold">
          <p className='text-2xl'>
            {data.first_name} {data.middle_name} {data.last_name}</p>
        </Link>
        <div className="flex space-x-2 md:hidden">
          <Image
            src="/icons/translate.svg"
            alt="Switch between English and Chinese"
            width={20}
            height={20}
          />
          <button
            ref={menuButtonRef}
            onClick={toggleMenu}
          >
            {
              isNavMenuOpen ? (
                <Image
                  src="/icons/menu-close.svg"
                  alt="Close Menu"
                  width={20}
                  height={20}
                />
              ): (
                <Image
                  src="/icons/menu.svg"
                  alt="Menu"
                  width={20}
                  height={20}
                />
              )
            }
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/about" className="navbar-item">
            About
          </Link>
          <Link href="/publications" className="navbar-item">
            Publications
          </Link>
          <Link href="/projects" className="navbar-item">
            Projects
          </Link>
          <Link href="/talks" className="navbar-item">
            Talks
          </Link>
          <Link href="/contact" className="navbar-item">
            Contact
          </Link>
          <Image
            src="/icons/translate.svg"
            alt="Switch between English and Chinese"
            width={20}
            height={20}
          />
        </div>
      </div>
      {isNavMenuOpen && (
        <div ref={menuRef} className="side-menu md:hidden">
          <p className="text-2xl font-bold">Zefang Shen</p>
          <Link
            href="/about"
            className="navbar-item block py-1 hover:bg-gray-400"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/publications"
            className="navbar-item block py-1 hover:bg-gray-400"
            onClick={toggleMenu}
          >
            Publications
          </Link>
          <Link
            href="/projects"
            className="navbar-item block py-1 hover:bg-gray-400"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="/talks"
            className="navbar-item block py-1 hover:bg-gray-400"
            onClick={toggleMenu}
          >
            Talks
          </Link>
          <Link
            href="/contact"
            className="navbar-item block py-1 hover:bg-gray-400"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarClient;