import React from "react";
import Links from "@/components/navbar/links/Links";


function Navbar() {
  return (
    <div className="flex justify-between items-center text-center h-24 px-4">
      <div className="">
        <h1 className="text-2xl font-extrabold text-white">Nexty</h1>
      </div>

      <div>
        <Links />
      </div>
    </div>
  );
}

export default Navbar;
