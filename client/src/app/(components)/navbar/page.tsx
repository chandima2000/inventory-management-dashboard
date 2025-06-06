'use client';

import { setIsDarkMode, setIsSidebarCollapsed } from '@/redux/slices/globalSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store/store';
import { Menu, Search, Sun, Bell, Settings, Moon } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {

  const dispatch = useAppDispatch();

  {/* sidebar collapsed */ }
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  }

  {/* dark mode */ }
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode))
  }


  return (
    <div className="flex justify-between items-center w-full mb-7">

      {/* Left Side */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}>
          <Menu className='w-4 h-4' />
        </button>

        {/* Search bar */}
        <div className="relative">

          <input
            type="search"
            placeholder="search products"
            className='pl-10 pr-4 py-2 w-50 md:w-60 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500'
          />

          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">

          {/* Dark mode function */}
          <div className="">
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className='cursor-pointer text-gray-500' size={24} />
              ) : (
                <Moon className='cursor-pointer text-gray-500' size={24} />
              )}
            </button>
          </div>

          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={24} />
            <span
              className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full'>
              {/* later implement */} 3
            </span>
          </div>
          <hr className='w-0 h-7 border border-solid border-1 border-gray-300 mx-3'></hr>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9">
              {/* profile image */} image
            </div>
            <span className='font-semibold'>
              Name
              {/* name */}
            </span>
          </div>
        </div>
        <div className="">
          <Link href="/settings">
            <Settings className='cursor-pointer text-gray-500' size={24} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;