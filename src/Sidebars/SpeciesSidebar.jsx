import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const SpeciesSidebar = ({ setspeciesView, speciesToBeViewed, images,homeworld }) => {
  return (
    <div className="absolute w-[30vw] text-white flex flex-col px-4 py-4 top-0 right-0 bg-slate-800 overflow-scroll space-y-4 ">
      <button
        type="button"
        className="bg-gray-500 rounded-md w-[5rem] ml-auto flex justify-center"
        onClick={() => setspeciesView(false)}
      >
        <span className="flex items-center ">
          Close <IoMdCloseCircle />
        </span>
      </button>

      <div>
        <div className="w-[100%] h-[70%] bg-slate-500 flex items-center rounded-md">
          <img
            src={images[speciesToBeViewed.id - 1]}
            alt=""
            className="w-[90%] h-[90%] object-fit mx-auto"
          />
        </div>
      </div>
      <div>
        <h1 className="mb-1">Name</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {speciesToBeViewed.name}
        </p>
      </div>

      <div>
        <h1 className="mb-1">Homeworld</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md ">
          {homeworld[speciesToBeViewed.homeworld]}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Lifespan</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {speciesToBeViewed.average_lifespan}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Classification</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {speciesToBeViewed.classification}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Language</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {speciesToBeViewed.language}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Designation</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {speciesToBeViewed.designation}
        </p>
      </div>
    </div>
  );
};

export default SpeciesSidebar;
