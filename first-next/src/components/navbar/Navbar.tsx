"use client";

import React from "react";
import Links from "@/components/navbar/links/Links";
import CustomLinks from "../CustomLinks";
import { usePathname } from "next/navigation";
import { useState } from "react";
import 

// This helps to run a map on the current path and highlight the active link
const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

function Navbar() {
  const pathname = usePathname();
  // We can use this to check if the user is an admin or if the user is logged in

  const session = true;
  const isAdmin = true;

  

  return (
    <div className="flex justify-between items-center text-center h-24 px-4">
      <div className="">
        <h1 className="text-2xl font-extrabold text-white">Nexty</h1>
      </div>

      <div className=" hidden md:flex gap-2 px-2 py-4 ">
       
        
        {isAdmin && (
          <CustomLinks href="/admin" size="mf">
            Admin
          </CustomLinks>
        )}
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
      
    </div>
  );
}

export default Navbar;
