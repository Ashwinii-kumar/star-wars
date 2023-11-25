import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const PeopleSidebar = ({ setPeopleView, peopleToBeViewed, images }) => {
  return (
    <div className="absolute w-[30vw] text-white flex flex-col px-4 py-4 top-0 right-0 bg-slate-800 overflow-scroll space-y-4 ">
      <button
        type="button"
        className="bg-gray-500 rounded-md w-[5rem] ml-auto flex justify-center"
        onClick={() => setPeopleView(false)}
      >
        <span className="flex items-center ">
          Close <IoMdCloseCircle />
        </span>
      </button>

      <div>
        <div className="w-[100%] h-[70%] bg-slate-500 flex items-center rounded-md">
          <img
            src={images[peopleToBeViewed.id - 1]}
            alt=""
            className="w-[90%] h-[90%] object-fit mx-auto"
          />
        </div>
      </div>
      <div>
        <h1 className="mb-1">Name</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {peopleToBeViewed.name}
        </p>
      </div>

      <div>
        <h1 className="mb-1">Birth Year</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md ">
          {peopleToBeViewed.birth_year}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Gender</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {peopleToBeViewed.gender}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Height</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {peopleToBeViewed.height}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Mass</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {peopleToBeViewed.mass}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Skin Color</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {peopleToBeViewed.skin_color}
        </p>
      </div>
    </div>
  );
};

export default PeopleSidebar;
