import React from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import { HiViewList } from "react-icons/hi";

const View = ({toggleView,setToggleView,closeMenu}) => {
  return (
    <div className="flex border-[.5px] border-white rounded-sm ">
    <button
      type="button"
      className={
        toggleView
          ? "flex items-center justify-center bg-white text-gray-700 py-[1px] px-[5px] space-x-[1px] focus:outline-none border-2 border-white mr-1"
          : "flex items-center justify-center py-[1px] px-[5px]"
      }
      onClick={() => {setToggleView(!toggleView);closeMenu();}}
    >
      <BsFillGridFill className="text-sm" />
      {toggleView && <span className="text-sm">Grid</span>}
    </button>
    <button
      type="button"
      className={
        !toggleView
          ? "flex items-center justify-center bg-white focus:outline-none text-gray-700 py-[1px] px-[5px] space-x-[1px] border-2 border-white"
          : "flex items-center  justify-center py-[1px] px-[5px]"
      }
      onClick={() => {setToggleView(!toggleView);closeMenu()}}
    >
      <HiViewList className="text-sm" />
      {!toggleView && <span className="text-sm">List</span>}
    </button>
  </div>

  )
}

export default View