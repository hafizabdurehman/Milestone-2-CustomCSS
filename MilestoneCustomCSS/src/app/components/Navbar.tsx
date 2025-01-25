'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
     // Navbar
    <nav className="navbar">

      <div className="container nav-container">
             
             {/* Logo here/Company Name */}
        <Link href="/" className="logo">
          TechSage
        </Link>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>

          <li><Link href="/" className="nav-link" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/About" className="nav-link" onClick={toggleMenu}>About</Link></li>
          <li><Link href="/Services" className="nav-link" onClick={toggleMenu}>Services</Link></li>
          <li><Link href="/Contact" className="nav-link" onClick={toggleMenu}>Contact</Link></li>

        </ul>

      </div>
      
    </nav>
  );
}