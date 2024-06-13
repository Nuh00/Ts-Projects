import React from "react";
import Links from "@/components/navbar/links/Links";


function Navbar() {
  return (
    <div className="bg-green-600">
      <div>Logo</div>

      <div>
        <Links></Links>
      </div>
    </div>
  );
}

export default Navbar;
