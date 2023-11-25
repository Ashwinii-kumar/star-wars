import React, { useEffect, useState } from "react";
import View from "../components/View";
import species1 from "../images/species/species-1.jpeg";
import species2 from "../images/species/species-2.jpeg";
import species3 from "../images/species/species-3.jpeg";
import species4 from "../images/species/species-4.jpeg";
import species5 from "../images/species/species-5.jpeg";
import species6 from "../images/species/species-6.jpeg";
import species7 from "../images/species/species-7.jpeg";
import species8 from "../images/species/species-8.jpeg";
import species9 from "../images/species/species-9.jpeg";
import species10 from "../images/species/species-10.jpeg";
import speciesIcon from "../images/icons/Alien.jpg";
import { CiMenuKebab } from "react-icons/ci";
import { RiDeleteBinLine, RiMovie2Line, RiShareLine } from "react-icons/ri";
import { GrDownload, GrView } from "react-icons/gr";
import {
  PiPencilSimpleLight,
  PiFoldersLight,
  PiLockSimpleLight,
} from "react-icons/pi";
import { IoMdCloseCircle } from "react-icons/io";
import SpeciesSidebar from "../Sidebars/SpeciesSidebar";

const Species = () => {
  const [toggleView, setToggleView] = useState(false);
  const [menu, setMenu] = useState(false);
  const [menuId, setMenuId] = useState(null);
  const [speciesView, setspeciesView] = useState(false);
  const [speciesToBeViewed, setspeciesToBeViewed] = useState(null);
  const [species, setspecies] = useState([]);
  const [homeworld, setHomeworld] = useState(null);
  const images = [
    species1,
    species2,
    species3,
    species4,
    species5,
    species6,
    species7,
    species8,
    species9,
    species10,
  ];
  useEffect(() => {
    const fetchspecies = async () => {
      let response = await fetch("https://swapi.dev/api/species/");
      let speciesData = await response.json();

      setspecies(speciesData.results);
      speciesData = speciesData.results.map((item, index) => {
        item.id = index + 1;
      });
    };

    fetchspecies();
  }, []);

  useEffect(() => {
    const fetchHomeworlds = async () => {
      const newHomeworlds = {};
      for (const movie of species) {
        try {
          const response = await fetch(movie["homeworld"]);
          const data = await response.json();
          newHomeworlds[movie["homeworld"]] = data.name;
        } catch (error) {
          newHomeworlds[movie["homeworld"]] = "Unknown";
        }
      }
      console.log(newHomeworlds);
      setHomeworld(newHomeworlds);
    };

    fetchHomeworlds();
  }, []);

  const deleteHandler = (name) => {
    let a = species.filter((item) => item.name !== name);
    setspecies(a);
    closeMenu();
    return;
  };

  const onViewHandler = (item) => {
    closeMenu();
    setspeciesView(true);
    setspeciesToBeViewed(item);
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
        <h1>Species</h1>
        <View
          toggleView={toggleView}
          setToggleView={setToggleView}
          closeMenu={closeMenu}
        />
      </div>
      {toggleView && (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-5 mt-5">
          {species.map((item, index) => {
            return (
              <div key={index} className=" h-[200px] flex flex-col ">
                <div className="w-[90%] h-[70%] bg-slate-500 flex items-center rounded-md">
                  <img
                    src={images[item.id - 1]}
                    alt=""
                    className="w-[60%] h-[100%]  mx-auto"
                  />
                </div>

                <div className="relative flex w-[90%] items-center mt-3  rounded-md bg-[#344063] p-3">
                  <img src={speciesIcon} alt="" className="h-[15px] mr-2" />
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
                <th className="p-2 pl-5 mb-2">Name</th>
                <th>Homeworld</th>
                <th>Lifespan</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {species.map((movie, index) => (
                <tr
                  key={movie.id}
                  className={
                    index !== species.length - 1 ? "border-b-[.5px] " : ""
                  }
                >
                  <td className="pt-4 pb-2 pl-6">
                    <span className="flex items-center">
                      <img src={speciesIcon} alt="" className="h-[15px] mr-2" />
                      {movie.name}
                    </span>
                  </td>
                  <td className="pt-3 ">{homeworld[movie.homeworld]}</td>
                  <td className="pt-3 ">{movie.average_lifespan}</td>
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
      {speciesView && (
        <SpeciesSidebar
          setspeciesView={setspeciesView}
          speciesToBeViewed={speciesToBeViewed}
          images={images}
          homeworld={homeworld}
        />
      )}
    </div>
  );
};

export default Species;
