'use client';

import SidebarLink from "@/app/utility/SidebarLink";
import { setIsSidebarCollapsed } from "@/redux/slices/globalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store/store";
import {
    Menu, 
    Archive,
    CircleDollarSign,
    ShoppingCart,
    LayoutDashboard,
    Settings,
    User
} from "lucide-react"
import Image from 'next/image';

const Sidebar = () => {

    const dispatch = useAppDispatch();

    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    );

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    }

    const sidebarStyle = `fixed flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
        } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

    return (
        <div className={sidebarStyle}>
            <div
                className="flex gap-4 justify-between md:justify-normal items-center pt-8">
                {isSidebarCollapsed ? (

                    <Image
                        src="/logo.jpg"
                        width={550}
                        height={550}
                        alt="logo"
                    />

                ) : (
                    <div className="flex flex-row gap-2 items-center">
                        <Image
                            src="/logo.jpg"
                            width={50}
                            height={50}
                            alt="logo"
                        />
                        <h1 className="font-extrabold text-2xl">EStock</h1>
                    </div>

                )}

                <button
                    className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue mr-5"
                    onClick={toggleSidebar}
                >
                    <Menu className="w-4 h-4" />
                </button>
            </div>



            {/* Sidebar Links */}
            <div className="flex-grow mt-16">
                <SidebarLink
                    href="/dashboard"
                    icon={LayoutDashboard}
                    label="Dashboard"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/inventory"
                    icon={Archive}
                    label="Inventory"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/products"
                    icon={ShoppingCart}
                    label="Products"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/users"
                    icon={User}
                    label="Users"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/settings"
                    icon={Settings}
                    label="Settings"
                    isCollapsed={isSidebarCollapsed}
                />
                <SidebarLink
                    href="/expenses"
                    icon={CircleDollarSign}
                    label="Expenses"
                    isCollapsed={isSidebarCollapsed}
                />


            </div>



            {/* Footer */}
            <div>
                <p className={`${isSidebarCollapsed ? "hidden" : "text-center text-xs text-gray-500 mb-10"} `}> 2025 &copy;  EStock </p>
            </div>
        </div>
    )
}

export default Sidebar