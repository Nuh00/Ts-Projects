import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col  md:flex-row  justify-between items-center text-gray-600 md:w-[80%] w-full md:mx-auto">
      <aside>
        <h1 className='text-xl font-extrabold mb-5'>NExty</h1>
      </aside>
      
      <div>
        <ul className="flex flex-col md:flex-row gap-5 text-center">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>copyright @2021

          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
