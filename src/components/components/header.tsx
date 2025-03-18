'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-30 text-gray-100 w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-2">
        <div className="flex-shrink-0 w-full md:w-auto text-center md:text-left mb-2 md:mb-0">
          <Image
            src="/billybagtas.png"
            alt="Logo"
            width={240}
            height={80}
            priority
            className="dark:invert mx-auto md:mx-0"
          />
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:justify-center items-center gap-4 text-white text-center p-4 md:p-0 font-sans">
            <li>
              <Link
                href="/home"
                className="hover:text-blue-400 block py-2 md:py-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-blue-400 block py-2 md:py-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-blue-400 block py-2 md:py-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-400 block py-2 md:py-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Exhibition
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-blue-400 block py-2 md:py-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

