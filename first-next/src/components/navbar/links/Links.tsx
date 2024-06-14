"use client";


import Link from "next/link";
import React from "react";
import { useState } from "react";


const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

function Links() {
    const [activeLink, setActiveLink] = useState(links[0].title);


  return (
    <div className="flex gap-2">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.title}
          className={`px-3 py-1 rounded-2xl transition duration-300 ease-in-out ${activeLink === link.title ? "bg-white text-black": "hover:bg-white hover:text-black"}`}
          onClick={() => setActiveLink(link.title)}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default Links;
