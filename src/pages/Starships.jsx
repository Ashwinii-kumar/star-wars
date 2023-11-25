import React, { useEffect, useState } from "react";
import View from "../components/View";
import starship1 from "../images/starships/spaceship-1.jpeg";
import starship2 from "../images/starships/spaceship-2.jpeg";
import starship3 from "../images/starships/spaceship-3.jpeg";
import starship4 from "../images/starships/spaceship-4.jpeg";
import starship5 from "../images/starships/spaceship-5.jpeg";
import starship6 from "../images/starships/spaceship-6.jpeg";
import starship7 from "../images/starships/spaceship-7.jpeg";
import starship8 from "../images/starships/spaceship-8.jpeg";
import starship9 from "../images/starships/spaceship-9.jpeg";
import starship10 from "../images/starships/spaceship-10.jpeg";
import starshipIcon from "../images/icons/RocketLaunch.jpg";
import { CiMenuKebab } from "react-icons/ci";
import { RiDeleteBinLine, RiMovie2Line, RiShareLine } from "react-icons/ri";
import { GrDownload, GrView } from "react-icons/gr";
import {
  PiPencilSimpleLight,
  PiFoldersLight,
  PiLockSimpleLight,
} from "react-icons/pi";
import { IoMdCloseCircle } from "react-icons/io";
import StarshipSidebar from "../Sidebars/StarshipSidebar";

const Starships = () => {
  const [toggleView, setToggleView] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menuId, setMenuId] = useState(null);
  const [starshipsView, setStarshipsView] = useState(false);
  const [starshipsToBeViewed, setStarshipsToBeViewed] = useState(null);
  const [starships, setStarships] = useState([]);
  const images = [
    starship1,
    starship2,
    starship3,
    starship4,
    starship5,
    starship6,
    starship7,
    starship8,
    starship9,
    starship10
  
    
    
  ];
  useEffect(() => {
    const fetchStarships = async () => {
      let response = await fetch("https://swapi.dev/api/starships/");
      let data = await response.json();

      setStarships(data.results);
      data = data.results.map((item, index) => {
        item.id = index + 1;
      });
    };

    fetchStarships();
  }, []);

 

  const deleteHandler = (name) => {
    let a = starships.filter((item) => item.name !== name);
    setStarships(a);
    closeMenu();
    return;
  };

  const onViewHandler = (item) => {
    closeMenu();
    setStarshipsView(true);
    setStarshipsToBeViewed(item);
  };

  const closeMenu = () => {
    setMenuId(null);
    setMenu(false);
  };

  const openMenu = (id) => {
    setMenuId(id);
    setMenu(true);
  };

  return (
    <div className="w-[100%] min-h-[80vh] py-1">
      <div className="w-[100%]   flex justify-between items-start">
        <h1>Starships</h1>
        <View
          toggleView={toggleView}
          setToggleView={setToggleView}
          closeMenu={closeMenu}
        />
      </div>
      {toggleView && (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-5 mt-5">
          {starships.map((item, index) => {
            return (
              <div key={index} className=" h-[200px] flex flex-col ">
                <div className="w-[100%] h-[70%] bg-slate-500 flex items-center rounded-md">
                  <img
                    src={images[item.id - 1]}
                    alt=""
                    className="w-[90%] h-[90%] object-fit mx-auto"
                  />
                </div>

                <div className="relative flex w-[100%] items-center mt-3  rounded-md bg-[#344063] p-3">
                  <img src={starshipIcon} alt="" className="h-[15px] mr-2" />
                  <h3>{item.name}</h3>
                  <button
                    type="button"
                    className="absolute bg-gray-500 p-1 top-3  right-3"
                  >
                    <CiMenuKebab
                      className="text-white bg-grey-500 "
                      onClick={() => openMenu(item.name)}
                    />
                  </button>
                  {menu && menuId === item.name && (
                    <div className="w-[9rem] bg-white text-gray-600 h-[16rem] flex flex-col px-1 py-2  text-sm rounded-sm absolute right-0 top-0 ">
                      <button
                        type="button"
                        className="bg-blue-500 rounded-md  text-white p-1 flex w-[2rem] ml-auto justify-center items-center"
                        onClick={() => closeMenu()}
                      >
                        <span className="flex items-center ">
                          <IoMdCloseCircle />
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => onViewHandler(item)}
                        className="hover:bg-gray-300 p-1 px-2"
                      >
                        <span className="flex items-center justify-left ">
                          <GrView className="mr-1" />
                          View
                        </span>
                      </button>
                      <button
                        type="button"
                        className="hover:bg-gray-300 p-1 px-2"
                      >
                        <span className="flex items-center">
                          <GrDownload className="mr-1" />
                          Download
                        </span>
                      </button>
                      <button
                        type="button"
                        className="hover:bg-gray-300 p-1 px-2"
                      >
                        <span className="flex items-center">
                          <PiPencilSimpleLight />
                          Rename
                        </span>
                      </button>
                      <button
                        type="button"
                        className="hover:bg-gray-300 p-1 px-2"
                      >
                        <span className="flex items-center">
                          <RiShareLine className="mr-1" /> Link
                        </span>
                      </button>
                      <button
                        type="button"
                        className="hover:bg-gray-300 p-1 px-2"
                      >
                        <span className="flex items-center">
                          <PiFoldersLight className="mr-1" />
                          Move
                        </span>
                      </button>
                      <button
                        type="button"
                        className="hover:bg-gray-300 p-1 px-2"
                      >
                        <span className="flex items-center">
                          <PiLockSimpleLight className="mr-1" />
                          Mark Private
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteHandler(item.name)}
                        className="text-pink-500 hover:bg-gray-300 p-1 px-2"
                      >
                        <span className="flex  items-center">
                          <RiDeleteBinLine className="mr-1 text-pink-500" />
                          Delete
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
      {!toggleView && (
        <div className="w-[100%] mt-5">
          <table className="w-[100%]  ">
            <thead>
              <tr className="rounded-lg bg-[#344063] text-left ">
                <th className="p-2 pl-2 mb-2">Name</th>
                <th>Model</th>
                <th>Hyperdrive Rating</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {starships.map((movie, index) => (
                <tr
                  key={movie.id}
                  className={
                    index !== starships.length - 1 ? "border-b-[.5px] " : ""
                  }
                >
                  <td className="pt-4 pb-2 pl-6">
                    <span className="flex items-center">
                    <img src={starshipIcon} alt="" className="h-[15px] mr-2" />
                      {movie.name}
                    </span>
                  </td>
                  <td className="pt-3 text-sm">{movie.model}</td>
                  <td className="pt-3 text-sm">{movie.hyperdrive_rating}</td>
                  <td className="pt-3 text-left relative">
                    <button type="button" onClick={() => openMenu(movie.name)}>
                      <CiMenuKebab className="text-white bg-grey-500 " />
                    </button>
                    {menu && menuId === movie.name && (
                      <div className="w-[9rem] bg-white text-gray-600 h-[15rem] flex flex-col px-1 py-2 absolute top-0 right-0 text-sm rounded-sm">
                        <button
                          type="button"
                          className="bg-blue-500 rounded-md  text-white p-1 flex w-[2rem] ml-auto justify-center items-center"
                          onClick={() => closeMenu()}
                        >
                          <span className="flex items-center ">
                            <IoMdCloseCircle />
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => onViewHandler(movie)}
                          className="hover:bg-gray-300 p-1 px-2"
                        >
                          <span className="flex items-center justify-left ">
                            <GrView className="mr-1" />
                            View
                          </span>
                        </button>
                        <button
                          type="button"
                          className="hover:bg-gray-300 p-1 px-2"
                        >
                          <span className="flex items-center">
                            <GrDownload className="mr-1" />
                            Download
                          </span>
                        </button>
                        <button
                          type="button"
                          className="hover:bg-gray-300 p-1 px-2"
                        >
                          <span className="flex items-center">
                            <PiPencilSimpleLight className="mr-1" />
                            Rename
                          </span>
                        </button>
                        <button
                          type="button"
                          className="hover:bg-gray-300 p-1 px-2"
                        >
                          <span className="flex items-center">
                            <RiShareLine className="mr-1" /> Link
                          </span>
                        </button>
                        <button
                          type="button"
                          className="hover:bg-gray-300 p-1 px-2"
                        >
                          <span className="flex items-center">
                            <PiFoldersLight className="mr-1" />
                            Move
                          </span>
                        </button>
                        <button
                          type="button"
                          className="hover:bg-gray-300 p-1 px-2"
                        >
                          <span className="flex items-center">
                            <PiLockSimpleLight className="mr-1" />
                            Mark Private
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteHandler(movie.name)}
                          className="text-pink-500 hover:bg-gray-300 p-1 px-2"
                        >
                          <span className="flex  items-center">
                            <RiDeleteBinLine className="mr-1 text-pink-500" />
                            Delete
                          </span>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {starshipsView && (
        <StarshipSidebar
          setStarshipsView={setStarshipsView}
          starshipsToBeViewed={starshipsToBeViewed}
          images={images}
        />
      )}
    </div>
  );
};

export default Starships;
