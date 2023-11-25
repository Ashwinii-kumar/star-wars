import React, { useEffect, useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { RiDeleteBinLine, RiMovie2Line, RiShareLine } from "react-icons/ri";
import { GrDownload, GrView } from "react-icons/gr";
import {
  PiPencilSimpleLight,
  PiFoldersLight,
  PiLockSimpleLight,
} from "react-icons/pi";
import FilmSidebar from "../Sidebars/FilmSidebar";
import { IoMdCloseCircle } from "react-icons/io";
import peopleIcon from "../images/icons/Users.jpg";
import planetsIcon from "../images/icons/Planet.jpg";





const ListView = ({ properties, container,type }) => {
    const[homeworlds,setHomeworlds]=useState([]);


     const m=new Map();
     m["peoples"]=peopleIcon;
     m["planets"]=planetsIcon;










    useEffect(() => {
        const fetchHomeworlds = async () => {
          const newHomeworlds = {};
          for (const movie of container) {
            try {
              const response = await fetch(movie[properties[2]]);
              const data = await response.json();
              newHomeworlds[movie[properties[2]]] = data.name;
            } catch (error) {
              console.error("Error fetching homeworld:", error);
              newHomeworlds[movie[properties[2]]] = "Unknown";
            }
          }
          setHomeworlds(newHomeworlds);
        };
    
        fetchHomeworlds();
      }, [container, properties]);

  return (
    <div className="w-[85vw] mt-5">
      <table className="w-[100%] ">
        <thead>
          <tr className="rounded-lg bg-[#344063] text-left ">
            <th className="p-2 pl-5 mb-2">{properties[0]}</th>
            <th>{properties[1]}</th>
            <th>{properties[2]}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {container.map((movie, index) => (
            <tr
              key={index}
              className={
                index !== container.length - 1
                  ? "border-b-[.5px] relative"
                  : "relative"
              }
            >
              <td className="pt-4 pb-2 pl-6">
                <span className="flex items-center">
                  {/* <RiMovie2Line className="mr-2" /> */}
                  <img src={m[`${type}`]} alt="" className="h-[15px] mr-2" />
                  {movie[properties[0]]}
                </span>
              </td>
              <td className="pt-3 ">{movie[properties[1]]}</td>
              <td className="pt-3 ">{homeworlds[movie[properties[2]]]}</td>
              <td className="pt-3 text-left">
                {/* Action buttons can be added here */}
                {/* For example, Edit and Delete buttons */}
                <button
                  type="button"
                  //   onClick={()=>openMenu(movie.episode_id)}
                >
                  <CiMenuKebab className="text-white bg-grey-500 " />
                </button>
                {/* {menu && menuId===movie.episode_id && ( */}
                <div className="w-[9rem] bg-white text-gray-600 h-[15rem] flex flex-col px-1 py-2 absolute top-0 right-0 text-sm rounded-sm">
                  {/* <button type="button" className="bg-blue-500 rounded-md  text-white p-1 flex w-[2rem] ml-auto justify-center items-center"
                //  onClick={()=>closeMenu()}
                 ><span className="flex items-center "><IoMdCloseCircle /></span></button> */}
                  <button
                    type="button"
                    // onClick={() => onViewHandler(movie)}
                    className="hover:bg-gray-300 p-1 px-2"
                  >
                    <span className="flex items-center justify-left ">
                      <GrView className="mr-1" />
                      View
                    </span>
                  </button>
                  <button type="button" className="hover:bg-gray-300 p-1 px-2">
                    <span className="flex items-center">
                      <GrDownload className="mr-1" />
                      Download
                    </span>
                  </button>
                  <button type="button" className="hover:bg-gray-300 p-1 px-2">
                    <span className="flex items-center">
                      <PiPencilSimpleLight />
                      Rename
                    </span>
                  </button>
                  <button type="button" className="hover:bg-gray-300 p-1 px-2">
                    <span className="flex items-center">
                      <RiShareLine className="mr-1" /> Link
                    </span>
                  </button>
                  <button type="button" className="hover:bg-gray-300 p-1 px-2">
                    <span className="flex items-center">
                      <PiFoldersLight className="mr-1" />
                      Move
                    </span>
                  </button>
                  <button type="button" className="hover:bg-gray-300 p-1 px-2">
                    <span className="flex items-center">
                      <PiLockSimpleLight className="mr-1" />
                      Mark Private
                    </span>
                  </button>
                  <button
                    type="button"
                    // onClick={() => deleteHandler(movie.episode_id)}
                    className="text-pink-500 hover:bg-gray-300 p-1 px-2"
                  >
                    <span className="flex  items-center">
                      <RiDeleteBinLine className="mr-1 text-pink-500" />
                      Delete
                    </span>
                  </button>
                </div>
                {/* )} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
