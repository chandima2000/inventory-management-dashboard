'use client';

import { Menu } from "lucide-react"

const Sidebar = () => {
  return (
    <div className="">
        <div 
            className="flex gap-3 justify-between md:justify-normal items-center pt-8">
            <div className="">
                {/* Top logo */}
            </div>
            <h1 className="font-extrabold text-2xl">EStock</h1>
        
            <button 
                className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue"
                onClick={() => {}}
                >
                <Menu className="w-4 h-4"/>
            </button>
        </div>

        {/* Links */}
        <div className="flex-grow mt-8">
            {/* Links here */}
        </div>

        {/* Footer */}
        <div className="">
            <p className="text-center text-xs text-gray-500">&copy; 2025 EStock</p>
        </div>
    </div>
  )
}

export default Sidebar