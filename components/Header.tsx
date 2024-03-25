"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { GeistMono } from 'geist/font/mono';

const menuItems = ["edificio", "ubicacion", "unidades", "contacto"];

interface HeaderProps {
  isScrolled: boolean
}

const Header = ({ isScrolled }: HeaderProps) => {
  let tl = gsap.timeline({ paused: true });

  useEffect(() => {
    tl.to(".menu-overlay", {
      duration: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power2.out",
    });

    tl.to(
      ".menu-link",
      {
        opacity: 1,
        y: 64,
        stagger: 0.05,
        duration: 1.5,
        ease: "power1.inOut",
      },
      "<",
    );

    tl.to(
      ".menu-divider",
      {
        duration: 2,
        width: "100%",
        ease: "power4.out",
      },
      "<",
    );
  }, [tl]);

  const openMenu = () => {
    tl.play();
  }
  
  const closeMenu = () => {
    tl.reverse();
  }
  
  return (
    <>
      <header
        className={`
          fixed -top[120px] p-4 md:p-8 w-screen md:w-full col-span-full z-10
          ${isScrolled && 'mix-blend-difference'}
        `}
      >
        <nav
          className="flex items-center"
        >
          <div className="nav-logo flex-1">
            <a
              href="#top"
              data-scroll-to=""
              className="transition ease-in-out duration-100 hover:opacity-80"
            >
              <Image
                src="/images/logo.png"
                alt="Logo BAS + Labal"
                width={130}
                height={24}
                quality={80}
              />
            </a>
          </div>
          <button
            className="menu-open-btn sm:hidden"
            onClick={() => openMenu()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <DesktopMenu />
        </nav>
      </header>
      <MobileMenu closeMenu={closeMenu} />
    </>
  )
}

interface MobileMenuProps {
  closeMenu: () => void
}

export const MobileMenu = ({ closeMenu }: MobileMenuProps) => (
  <div
    className="menu-overlay h-screen fixed top-0 left-0 w-screen md:w-full p-8 bg-black z-[1000]"
    style={{
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'
    }}
  >
    <nav
      className="flex items-center justify-between mb-4 text-white menu-nav"
    >
      <div className="menu-logo flex-1">
        <a
          href="#top"
          data-scroll-to=""
          className="transition ease-in-out duration-100 hover:opacity-80"
          onClick={() => closeMenu()}
        >
          <Image
            src="/images/logo.png"
            alt="Logo BAS + Laba"
            width={130}
            height={26}
            quality={80}
            priority
          />
        </a>
      </div>
      <button
        className="menu-close-btn text-white"
        onClick={() => closeMenu()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </nav>
    <div className="menu-cols">
      <ul className="col py-4">
        {menuItems.map((menuItem, index) =>
          <li
            key={index}
            className="menu-link -top-20 opacity-0 relative w-max mt-4"
          >
            <a
              href={`#${menuItem}`}
              className="font-medium text-4xl anchor-link"
              data-scroll-to=""
              onClick={() => closeMenu()}
            >
              {menuItem}
              <sup
                className={`${GeistMono.className} ml-1 font-semibold text-xs`}
              >
                [0{index + 1}]
              </sup>
            </a>
          </li>
        )}
      </ul>
    </div>
    <ul className="menu-footer text-white">
      <div className="menu-footer-copy mt-4">
        <div className="w-0 h-px bg-white menu-divider mb-8" />
        <div className="slogan mb-2">
          <p>Pisos • D&uacute;plex • Terrazas.</p>
        </div>
        <ul className="socials flex gap-4">
          <li>
            <a
              href="https://instagram.com/@estomba.1046"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/541140435869"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </li>
        </ul>
      </div>
    </ul>
  </div>
)

export const DesktopMenu = () => (
  <ul
    className="items-baseline gap-4 hidden sm:flex"
  >
    {menuItems.map((menuItem, index) =>
      <li
        key={index}
      >
        <a
          href={`#${menuItem}`}
          data-scroll-to=""
          className="transition ease-in-out duration-100 hover:opacity-80 font-medium text-xl"
        >
          {menuItem}
          <sup
            className={`${GeistMono.className} ml-1 font-semibold text-xs`}
          >
            [0{index + 1}]
          </sup>
        </a>
      </li>
    )}
  </ul>
)

export default Header;