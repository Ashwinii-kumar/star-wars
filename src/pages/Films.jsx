import React, { useEffect, useState } from "react";
import poster1 from "../images/posters/sw1.jpg";
import poster2 from "../images/posters/sw-2.jpg";
import poster3 from "../images/posters/sw-3.jpg";
import poster4 from "../images/posters/sw-4.jpg";
import poster5 from "../images/posters/sw-5.jpg";
import poster6 from "../images/posters/sw-6.jpg";
import { CiMenuKebab } from "react-icons/ci";
import { RiDeleteBinLine, RiMovie2Line, RiShareLine } from "react-icons/ri";
import { GrDownload, GrView } from "react-icons/gr";
import View from "../components/View";
import {
  PiPencilSimpleLight,
  PiFoldersLight,
  PiLockSimpleLight,
} from "react-icons/pi";
import FilmSidebar from "../Sidebars/FilmSidebar";
import { IoMdCloseCircle } from "react-icons/io";

const Films = () => {
  //flas->list
  //true->grid
  const [toggleView, setToggleView] = useState(true);
  const [menu, setMenu] = useState(false);
  const [menuId, setMenuId] = useState(null);
  const [filmView, setFilmView] = useState(false);
  const [filmToBeViewed, setFilmToBeViewed] = useState(null);
  const [films, setFilms] = useState([]);
  let images = [poster1, poster2, poster3, poster4, poster5, poster6];
  useEffect(() => {
    const fetchFilms = async () => {
      let response = await fetch("https://swapi.dev/api/films/");
      let filmsData = await response.json();
      filmsData.results.sort((a, b) => a.episode_id - b.episode_id);
      setFilms(filmsData.results);
    };

    fetchFilms();
  }, []);

  const openMenu = (id) => {
    setMenuId(id);
    setMenu(true);
  };

  const closeMenu = () => {
    setMenuId(null);
    setMenu(false);
  };

  const deleteHandler = (id) => {
    let a = films.filter((item) => item.episode_id !== id);
    setFilms(a);
    closeMenu();
    return;
  };

  const onViewHandler = (item) => {
    closeMenu();
    setFilmView(true);
    setFilmToBeViewed(item);
  };

  return (
    <div className="w-[100%] min-h-[80vh] py-1">
      <div className=" flex justify-between items-center w-[100%]">
        <h1>Films</h1>
        <View
          toggleView={toggleView}
          setToggleView={setToggleView}
          closeMenu={closeMenu}
        />
      </div>
      {toggleView && (
        <div className=" flex flex-col md:grid md:grid-cols-3 grid-cols-1 gap-5 mt-5">
          {films.map((item) => {
            return (
              
                <div
                  key={item.episode_id}
                  className=" h-[250px] flex flex-col "
                >
                  <div className="w-[50%] h-[50%] bg-slate-500 flex items-center rounded-md">
                    <img
                      src={images[item.episode_id - 1]}
                      alt=""
                      className="w-[90%] h-[90%] object-fit mx-auto"
                    />
                  </div>

                  <div className="relative flex  items-center mt-3  rounded-md bg-[#344063] p-3">
                    <RiMovie2Line className="ml-1 mr-2" />
                    <h3>{item.title}</h3>
                    <button
                      type="button"
                      className="absolute bg-gray-500 p-1 top-3  right-3"
                    >
                      <CiMenuKebab
                        className="text-white bg-grey-500 "
                        onClick={() => openMenu(item.episode_id)}
                      />
                    </button>
                    {menu && menuId === item.episode_id && (
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
                        <button className="hover:bg-gray-300 p-1 px-2">
                          <span className="flex items-center">
                            <GrDownload className="mr-1" />
                            Download
                          </span>
                        </button>
                        <button className="hover:bg-gray-300 p-1 px-2">
                          <span className="flex items-center">
                            <PiPencilSimpleLight />
                            Rename
                          </span>
                        </button>
                        <button className="hover:bg-gray-300 p-1 px-2">
                          <span className="flex items-center">
                            <RiShareLine className="mr-1" /> Link
                          </span>
                        </button>
                        <button className="hover:bg-gray-300 p-1 px-2">
                          <span className="flex items-center">
                            <PiFoldersLight className="mr-1" />
                            Move
                          </span>
                        </button>
                        <button className="hover:bg-gray-300 p-1 px-2">
                          <span className="flex items-center">
                            <PiLockSimpleLight className="mr-1" />
                            Mark Private
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteHandler(item.episode_id)}
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
          <table className="w-[100%] mx-auto ">
            <thead>
              <tr className="rounded-lg bg-[#344063] text-left ">
                <th className="p-2 pl-5 mb-2">Name</th>
                <th>Director</th>
                <th>Release Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {films.map((movie, index) => (
                <tr
                  key={movie.episode_id}
                  className={
                    index !== films.length - 1 ? "border-b-[.5px] " : ""
                  }
                >
                  <td className="pt-4 pb-2 pl-6">
                    <span className="flex items-center">
                      <RiMovie2Line className="mr-2" />
                      {movie.title}
                    </span>
                  </td>
                  <td className="pt-3 ">{movie.director}</td>
                  <td className="pt-3 ">{movie.release_date}</td>
                  <td className="pt-3 text-left relative">
                    {/* Action buttons can be added here */}
                    {/* For example, Edit and Delete buttons */}
                    <button
                      type="button"
                      onClick={() => openMenu(movie.episode_id)}
                    >
                      <CiMenuKebab className="text-white bg-grey-500 " />
                    </button>
                    {menu && menuId === movie.episode_id && (
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
                          onClick={() => deleteHandler(movie.episode_id)}
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
      {filmView && (
        <FilmSidebar
          setFilmView={setFilmView}
          filmToBeViewed={filmToBeViewed}
        />
      )}
    </div>
  );
};

export default Films;
