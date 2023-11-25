import React from 'react'
import homepage from '../images/icons/home-page.webp';
const Home = () => {
  return (
    <>
        <div className='w-[100%]  h-[80vh] pt-16'>

          <div className='w-[46%] h-[20rem] mx-auto  rounded-lg bg-white p-4 text-black'>
          <img src={homepage} alt=""  className='h-[70%] w-[100%] rounded-lg mb-3'/>
           <h1 className='font-bold  mb-1 text-lg'>Welcome to Star Wars Dashboard</h1>
           <p className='text-gray-800 text-xs'>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
          </div>




        </div>
    </>
  )
}

export default Home