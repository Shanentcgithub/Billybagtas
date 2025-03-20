'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Facebook, Instagram, Mail } from 'lucide-react';

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="sticky top-0 z-30 text-gray-100 w-full bg-transparent">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-2">

        <button
          className="text-white focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <Menu size={24} />
        </button>

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-800 bg-opacity-95 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-40`}
        >
          <div className="p-4">
            <button
              className="text-white focus:outline-none mb-4"
              onClick={toggleSidebar}
              aria-label="Close sidebar"
            >
              <X size={24} />
            </button>
            <ul className="flex flex-col gap-4 text-white font-sans">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-400 block py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutme"
                  className="hover:text-blue-400 block py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/exhibition"
                  className="hover:text-blue-400 block py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Exhibition
                </Link>
              </li>
              <li>
                <Link
                  href="/paintings"
                  className="hover:text-blue-400 block py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Paintings
                </Link>
              </li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.facebook.com/billybagtas.official2018"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/billybagtas.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <Instagram size={24} />
              </a>
              <a
                href="bagtaschristianbilly@gmail.com"
                className="text-white hover:text-blue-400"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>


        <div className="flex-shrink-0 w-full md:w-auto text-center md:text-right mb-2 md:mb-0">
          <Image
            src="/billybagtas.png"
            alt="Logo"
            width={200}
            height={50}
            priority
            className="dark:invert mx-auto md:mx-0"
          />
        </div>
      </div>
    </header>
  );
}
//ss