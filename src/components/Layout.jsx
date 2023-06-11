import './Layout.css';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Layout = ({ children }) => {
  const navRef = useRef(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  const renderItems = () => {
    if (isExpanded) {
      return (
        <ul className='navbar-items'>
          <li>Homepage</li>
          <li>Calendar</li>
          <li>Social</li>
          <li>Messages</li>
          <li>Treasury</li>
          <li>Admin</li>
          <li>Settings</li>
        </ul>
      );
    }
    return (
      <ul className='navbar-items'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    );
  };

  useEffect(() => {
    const width = isExpanded ? '7vw' : '3vw';
    gsap.to(navRef.current, { width, duration: 0.3 });

    if (isExpanded) {
      gsap.fromTo(
        navRef.current.querySelectorAll('.navbar-items li'),
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.3 }
      );
    } else {
      gsap.fromTo(
        navRef.current.querySelectorAll('.navbar-items li'),
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.3 }
      );
    }
  }, [isExpanded]);

  return (
    <div className='container'>
      {/* NAVBAR */}
      <nav ref={navRef} className='navbar'>
        <button className='expand-btn' onClick={toggleNavbar}>
          Expand
        </button>
        {renderItems()}
      </nav>

      {/* MAIN SECTION */}
      <main className='mainDisplay'>
        <div className='topDisplay'>
          <h1>Main display here</h1>
          <span>Date - Heure</span>
        </div>
        <div className='gridDisplay'>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
