"use client";

import React, { use } from "react";
import CustomLinks from "@/components/CustomLinks";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
// This helps to run a map on the current path and highlight the active link
const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

function Navbar() {
  const pathname = usePathname();
  // usePathname gives you the pathname for example, console.log(pathname) will ne "/contact"

  const [clicked, setClicked] = useState(false);
  const session = true;
  const isAdmin = true;

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && clicked) {
        setClicked(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  }, [clicked]);

  return (
    <div className="flex justify-between items-center text-center h-24 px-4">
      <div className="">
        <h1 className="text-2xl font-extrabold text-white">Nexty</h1>
      </div>

      <div className=" hidden md:flex gap-2 px-2 py-4 ">
        {/* This is the desktop menu */}

        {/* This is the map function that will run through the links and highlight the active link */}
        {links.map((link) => (
          <CustomLinks
            key={link.title}
            href={link.path}
            size="mf"
            className={
              pathname === link.path ? "bg-white text-black font-extrabold" : ""
            }
          >
            {link.title}
          </CustomLinks>
        ))}
        {/* This is the admin link, will only show if you are a admin */}
        {isAdmin && (
          <CustomLinks href="/admin" size="mf">
            Admin
          </CustomLinks>
        )}
        {/* This is the login/logout button. If you are in a session it will prompt you to LOGOUT and vice versa */}
        {session ? (
          <CustomLinks
            href="/logout"
            size="md"
            intent="danger"
            className="font-extrabold"
          >
            Logout
          </CustomLinks>
        ) : (
          <CustomLinks
            href="/login"
            size="md"
            className="bg-white text-black font-extrabold"
          >
            Login
          </CustomLinks>
        )}
      </div>
      {/* Menu icon for smaller screens */}
      <div className="md:hidden z-10" onClick={() => setClicked(!clicked)}>
        {clicked ? <X size="32" /> : <Menu size="32" />}
      </div>
      {/* Menu for smaller screens */}
      <div
        className={
          clicked
            ? "flex flex-col justify-center gap-20 fixed top-0 right-0 w-full z-50 h-screen border-r-gray-300 bg-[#000300] transition-all duration-500 ease-in-out"
            : "fixed right-[-100%] transition-all duration-500 "
        }
      >
        <>
          {links.map((link) => (
            <CustomLinks
              key={link.title}
              href={link.path}
              size="md"
              onClick={() => setClicked(false)}
              className={
                pathname === link.path
                  ? "bg-white text-black font-extrabold"
                  : ""
              }
            >
              {link.title}
            </CustomLinks>
          ))}
        </>

        {isAdmin && (
          <CustomLinks href="/admin" size="md">
            Admin
          </CustomLinks>
        )}

        {session ? (
          <CustomLinks
            href="/logout"
            size="md"
            intent="danger"
            onClick={() => setClicked(false)}
            className="font-extrabold"
          >
            Logout
          </CustomLinks>
        ) : (
          <CustomLinks
            href="/login"
            size="md"
            onClick={() => setClicked(false)}
            className="bg-white text-black font-extrabold"
          >
            Login
          </CustomLinks>
        )}
      </div>
    </div>
  );
}

export default Navbar;
