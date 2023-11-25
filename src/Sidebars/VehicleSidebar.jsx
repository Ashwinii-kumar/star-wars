import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

const VehicleSidebar = ({ setVehicleView, vehicleToBeViewed, images }) => {
  return (
    <div className="absolute w-[30vw] text-white flex flex-col px-4 py-4 top-0 right-0 bg-slate-800 overflow-scroll space-y-4 ">
      <button
        type="button"
        className="bg-gray-500 rounded-md w-[5rem] ml-auto flex justify-center"
        onClick={() => setVehicleView(false)}
      >
        <span className="flex items-center ">
          Close <IoMdCloseCircle />
        </span>
      </button>

      <div>
        <div className="w-[100%] h-[70%] bg-slate-500 flex items-center rounded-md">
          <img
            src={images[vehicleToBeViewed.id - 1]}
            alt=""
            className="w-[90%] h-[90%] object-fit mx-auto"
          />
        </div>
      </div>
      <div>
        <h1 className="mb-1">Name</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {vehicleToBeViewed.name}
        </p>
      </div>

      <div>
        <h1 className="mb-1">Model</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md ">
          {vehicleToBeViewed.model}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Manufacturer</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {vehicleToBeViewed.manufacturer}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Speed</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {vehicleToBeViewed.max_atmosphering_speed}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Cargo Capacity</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {vehicleToBeViewed.cargo_capacity}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Consumables</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {vehicleToBeViewed.consumables}
        </p>
      </div>
     
    </div>
  );
};

export default VehicleSidebar;
