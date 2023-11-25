import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const PlanetSidebar = ({ setPlanetView, planetToBeViewed, images }) => {
  return (
    <div className="absolute w-[30vw] text-white flex flex-col px-4 py-4 top-0 right-0 bg-slate-800 overflow-scroll space-y-4 ">
      <button
        type="button"
        className="bg-gray-500 rounded-md w-[5rem] ml-auto flex justify-center"
        onClick={() => setPlanetView(false)}
      >
        <span className="flex items-center ">
          Close <IoMdCloseCircle />
        </span>
      </button>

      <div>
        <div className="w-[100%] h-[70%] bg-slate-500 flex items-center rounded-md">
          <img
            src={images[planetToBeViewed.id - 1]}
            alt=""
            className="w-[90%] h-[90%] object-fit mx-auto"
          />
        </div>
      </div>
      <div>
        <h1 className="mb-1">Name</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {planetToBeViewed.name}
        </p>
      </div>

      <div>
        <h1 className="mb-1">Climate</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md ">
          {planetToBeViewed.climate}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Gravity</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {planetToBeViewed.gravity}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Terrain</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {planetToBeViewed.terrain}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Orbital Period</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {planetToBeViewed.orbital_period}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Population</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {planetToBeViewed.population}
        </p>
      </div>
    </div>
  );
};

export default PlanetSidebar;
