"use client"
import Image from "next/image";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const AdminNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();
  const isActive = (path) => path === pathname;
  

  return (
    <nav
      className="text-center flex flex-row items-center justify-between px-[50px] py-8 bg-[#187EB4]"
    >
      <Link href="/">
        <Image src="/rhmstechlogo.png" alt="logo" width={41} height={40} />
      </Link>
      <div className="flex items-center gap-4 flex-row">
        <Link href="/admin/productmanagement"
         className={`text-${isActive('/admin/productmanagement') ? '[#fff]' : '[#000]'} hover:text-[#fff] text-sm`}>
            Product Management
         
        </Link>
        <Link href="/admin/ordermanagement"
        className={`text-${isActive('/admin/ordermanagement') ? '[#fff]' : '[#000]'} hover:text-[#fff] text-sm`}>
            Order Management
       
        </Link>
        <Link href="/admin/swapmanagement"
        className={`text-${isActive('/admin/swapmanagement') ? '[#fff]' : '[#000]'} hover:text-[#fff] text-sm`}>
            Swap Management
        
        </Link>
        <Link href="/admin/categorymanagement"
        className={`text-${isActive('/admin/categorymanagement') ? '[#fff]' : '[#000]'} hover:text-[#fff] text-sm`}>
            Category Management
        
        </Link>
        <Link href="/admin/repairmanager"
         className={`text-${isActive('/admin/repairmanager') ? '[#fff]' : '[#000]'} hover:text-[#fff] text-sm`}>
            Repair Manager
         
        </Link>
        <Link href="/admin/accessoriesmanagement"
         className={`text-${isActive('/admin/accessoriesmanagement') ? '[#fff]' : '[#000]'} hover:text-[#fff] text-sm`}>
            Accessories Management
         
        </Link>
        <Link href="/admin/managearticles"
       className={`text-${isActive('/admin/managearticles') ? '[#fff]' : '[#000]'} hover:text-[#fff] text-sm`}>
            Manage Article
    
        </Link>
      </div>
      <div className="flex items-center gap-4 flex-row">
        <button>
          <IoIosNotificationsOutline className="h-[25px] w-auto" />
        </button>
        <div>Admin</div>
        <div className="relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex justify-center w-full border-none text-[#000] focus:outline-none"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {isOpen === true ? <FiChevronUp /> : <FiChevronDown />}
          </button>

          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm bg-[#fff] text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Sign out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
