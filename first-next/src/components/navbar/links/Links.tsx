"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const isAdmin = true;
  const session = true;

  return (
    <div className="flex gap-2">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.title}
          className={`px-3 py-1  rounded transition duration-300 ease-in-out ${
            pathname === link.path
              ? "bg-white text-black"
              : "hover:bg-white hover:text-black"
          }`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default Links;
