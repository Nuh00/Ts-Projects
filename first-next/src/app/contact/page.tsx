import Image from "next/image";

import React from "react";

function Contanct() {
  return (
    <main className="flex items-center gap-24">
      <div className="flex-1 relative">
        <Image src="/contact.png" alt="" width={500} height={500} className=" object-contain" />
      </div>
      <div className="flex-1">
        <form action="" className="flex flex-col gap-4">
          <input type="text" placeholder="Name and Surname" className=" bg-darker-gray p-3 rounded-s" />
          <input type="email" placeholder="Email address"  className=" bg-darker-gray p-3 rounded-s" />
          <input type="text" placeholder="Phone Number (Optional)"  className=" bg-darker-gray p-3 rounded-s" />
          <textarea name="" id="" cols={30} rows={10} placeholder="Message" className=" bg-darker-gray p-3 rounded-s" ></textarea>
          <button className=" bg-button-blue p-4 rounded-sm text-xs">Send </button>
        </form>
      </div>

    </main>
  )
}

export default Contanct;
