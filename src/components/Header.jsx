import React from 'react'
import logo from '../images/icons/logo-1.png';
import { FiSearch } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div className=' h-[4rem] flex justify-between mb-4'>
      <NavLink to="/" >
      <img src={logo} alt="" className='h-[40px]' width="65px"/>
      
      </NavLink>
      <div className='searchBar'>
        <input type="text" className='bg-[#04143d] border-[1px] rounded-md text-white pl-8 w-[16rem] py-1' placeholder='Search' />
        <FiSearch  style={{color:"white"}} className="absolute top-2.5 left-2.5"/>
      </div>
    </div>
  )
}

export default Header