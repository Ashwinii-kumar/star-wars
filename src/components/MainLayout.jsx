import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <div className="min-h-[100vh]  bg-[#04143d] text-white p-4 ">
            <Header />
            <div className='flex w-[100%] space-x-8 justify-between sm:justify-normal'>
                <Navbar/>
                <Outlet  />
            </div>
        </div>
    </>
  )
}

export default MainLayout