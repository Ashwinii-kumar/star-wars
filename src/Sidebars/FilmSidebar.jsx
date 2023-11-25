import React from "react";
import poster1 from "../images/posters/sw1.jpg";
import poster2 from "../images/posters/sw-2.jpg";
import poster3 from "../images/posters/sw-3.jpg";
import poster4 from "../images/posters/sw-4.jpg";
import poster5 from "../images/posters/sw-5.jpg";
import poster6 from "../images/posters/sw-6.jpg";
import { IoMdCloseCircle } from "react-icons/io";
const FilmSidebar = ({ setFilmView, filmToBeViewed }) => {
  let images = [poster1, poster2, poster3, poster4, poster5, poster6];

  return (
    <div className="absolute w-[30vw] text-white flex flex-col px-4 py-4 top-0 right-0 bg-slate-800 overflow-scroll space-y-4 ">
      <button
        type="button"
        className="bg-gray-500 rounded-md w-[5rem] ml-auto flex justify-center"
        onClick={() => setFilmView(false)}
      >
        <span className="flex items-center ">
          Close <IoMdCloseCircle />
        </span>
      </button>

      <div>
        <img
          src={images[filmToBeViewed.episode_id - 1]}
          alt=""
          className="w-[100%] h-[35vh] object-fit mx-auto"
        />
      </div>
      <div>
        <h1 className="mb-1">Title</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {filmToBeViewed.title}
        </p>
      </div>

      <div>
        <h1 className="mb-1">Opening Crawl</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md h-[10rem] overflow-scroll">
          {filmToBeViewed.opening_crawl}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Release Date</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {filmToBeViewed.release_date}
        </p>
      </div>
      <div>
        <h1 className="mb-1">Producer</h1>
        <p className="bg-white text-gray-700 p-3 rounded-md">
          {filmToBeViewed.producer}
        </p>
      </div>
    </div>
  );
};

export default FilmSidebar;
