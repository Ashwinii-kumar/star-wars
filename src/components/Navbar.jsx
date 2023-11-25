import React from "react";
import { NavLink } from "react-router-dom";
import { FiFolder } from "react-icons/fi";
import { IoChevronForward } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className="w-[15vw] flex flex-col space-y-6">
        <NavLink
          to="/films"
          className={({ isActive }) =>
            isActive ? "bg-[#CA4D68] p-1.5 rounded-lg flex justify-between items-center" : "flex justify-between items-center"
          }
        >
          <span className="flex items-center">
            <FiFolder className="mr-2" />
            Films
          </span>
          <span>
          <IoChevronForward className="mr-2"/>
          </span>
        </NavLink>
        <NavLink
          to="/people"
          className={({ isActive }) =>
            isActive ? "bg-[#CA4D68] p-1.5 rounded-lg flex justify-between items-center" : "flex justify-between items-center"
          }
        >
          <span className="flex  items-center ">
            <FiFolder className="mr-2" />
            People
          </span>
          <span>
          <IoChevronForward className="mr-2"/>
          </span>
        </NavLink>
        <NavLink
          to="/planets"
          className={({ isActive }) =>
            isActive ? "bg-[#CA4D68] p-1.5 rounded-lg flex justify-between items-center" : "flex justify-between items-center"
          }
        >
          <span className="flex items-center">
            <FiFolder className="mr-2" />
            Planets
          </span>
          <span>
          <IoChevronForward className="mr-2"/>
          </span>
        </NavLink>
        <NavLink
          to="/species"
          className={({ isActive }) =>
            isActive ? "bg-[#CA4D68] p-1.5 rounded-lg flex justify-between items-center" : "flex justify-between items-center"
          }
        >
          <span className="flex items-center">
            <FiFolder className="mr-2" />
            Species
          </span>
          <span>
          <IoChevronForward className="mr-2"/>
          </span>
        </NavLink>
        <NavLink
          to="/starships"
          className={({ isActive }) =>
            isActive ? "bg-[#CA4D68] p-1.5 rounded-lg flex justify-between items-center" : "flex justify-between items-center"
          }
        >
          <span className="flex items-center">
            <FiFolder className="mr-2" />
            Starships
          </span>
          <span>
          <IoChevronForward className="mr-2"/>
          </span>
        </NavLink>
        <NavLink
          to="/vehicles"
          className={({ isActive }) =>
            isActive ? "bg-[#CA4D68] p-1.5 rounded-lg flex justify-between items-center" : "flex justify-between items-center"
          }
        >
          <span className="flex items-center">
            <FiFolder className="mr-2" />
            Vehicles
          </span>
          <span>
          <IoChevronForward className="mr-2"/>
          </span>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
