import React from 'react'
import {NavLink} from "react-router-dom"
const Links = () => {
  return (
    <div className='flex justify-center gap-10 px-4 text-[#0066FF]'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}

export default Links
