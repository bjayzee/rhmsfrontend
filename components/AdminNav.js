"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const AdminNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const pathname = usePathname();
  const isActive = (path) => path === pathname;

  return (
    <div>
      {pathname !== "/admin/login" && (
        <nav className="text-center flex flex-col items-center md:flex-row md:justify-between px-4 py-4 md:px-8 bg-[#187EB4]">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <Link href="/admin">
                <Image
                  src="/rhmstechlogo.png"
                  alt="logo"
                  width={41}
                  height={40}
                />
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={toggleSidebar}>
                {isSidebarOpen ? (
                  <FiX className="text-white text-2xl" />
                ) : (
                  <FiMenu className="text-white text-2xl" />
                )}
              </button>
            </div>
            <div className="md:flex items-center gap-4 hidden">
              <Link
                href="/admin"
                className={`text-${
                  isActive("/admin" || "/productmanagement")
                    ? "[#fff]  pb-1  border-b-[3px] border-b-[#fff]"
                    : "[#000]"
                } hover:text-[#fff] text-sm no-underline`}
              >
                Product Management
              </Link>
              <Link
                href="/admin/ordermanagement"
                className={`text-${
                  isActive("/admin/ordermanagement")
                    ? "[#fff] pb-1  border-b-[3px] border-b-[#fff]"
                    : "[#000]"
                } hover:text-[#fff] text-sm no-underline`}
              >
                Order Management
              </Link>
              <Link
                href="/admin/swapmanagement"
                className={`text-${
                  isActive("/admin/swapmanagement")
                    ? "[#fff] pb-1  border-b-[3px] border-b-[#fff]"
                    : "[#000]"
                } hover:text-[#fff] text-sm no-underline`}
              >
                Swap Management
              </Link>
              <Link
                href="/admin/categorymanagement"
                className={`text-${
                  isActive("/admin/categorymanagement")
                    ? "[#fff] pb-1  border-b-[3px] border-b-[#fff]"
                    : "[#000]"
                } hover:text-[#fff] text-sm no-underline`}
              >
                Category Management
              </Link>
              <Link
                href="/admin/repairmanager"
                className={`text-${
                  isActive("/admin/repairmanager")
                    ? "[#fff] pb-1  border-b-[3px] border-b-[#fff]"
                    : "[#000]"
                } hover:text-[#fff] text-sm no-underline`}
              >
                Repair Manager
              </Link>
              <Link
                href="/admin/accessoriesmanagement"
                className={`text-${
                  isActive("/admin/accessoriesmanagement")
                    ? "[#fff] pb-1  border-b-[3px] border-b-[#fff]"
                    : "[#000]"
                } hover:text-[#fff] text-sm no-underline`}
              >
                Accessories Management
              </Link>
              <Link
                href="/admin/managearticles"
                className={`text-${
                  isActive("/admin/managearticles")
                    ? "[#fff] pb-1  border-b-[3px] border-b-[#fff]"
                    : "[#000]"
                } hover:text-[#fff] text-sm no-underline`}
              >
                Manage Article
              </Link>
            </div>
            <div className="md:flex items-center gap-4 hidden">
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
          </div>
          {isSidebarOpen && (
            <div className="md:hidden mt-4 flex flex-col">
              <div className="flex flex-col">
                <Link
                  href="/admin/productmanagement"
                  className={`text-${
                    isActive("/admin/productmanagement")
                      ? "[#fff] pb-1  border-b-[3px] border-b-[#fff]"
                      : "[#000]"
                  } hover:text-[#fff] text-sm no-underline`}
                >
                  Product Management
                </Link>
                <Link
                  href="/admin/ordermanagement"
                  className={`text-${
                    isActive("/admin/ordermanagement")
                      ? "[#fff] pb-1  border-b-[3px] border-b-[#fff]"
                      : "[#000]"
                  } hover:text-[#fff] text-sm no-underline`}
                >
                  Order Management
                </Link>
                <Link
                  href="/admin/swapmanagement"
                  className={`text-${
                    isActive("/admin/swapmanagement")
                      ? "[#fff] pb-1  border-b-[3px] border-b-[#fff]"
                      : "[#000]"
                  } hover:text-[#fff] text-sm no-underline`}
                >
                  Swap Management
                </Link>
                <Link
                  href="/admin/categorymanagement"
                  className={`text-${
                    isActive("/admin/categorymanagement")
                      ? "[#fff] pb-1  border-b-[3px] border-b-[#fff]"
                      : "[#000]"
                  } hover:text-[#fff] text-sm no-underline`}
                >
                  Category Management
                </Link>
                <Link
                  href="/admin/repairmanager"
                  className={`text-${
                    isActive("/admin/repairmanager")
                      ? "[#fff] pb-1  border-b-[3px] border-b-[#fff]"
                      : "[#000]"
                  } hover:text-[#fff] text-sm no-underline`}
                >
                  Repair Manager
                </Link>
                <Link
                  href="/admin/accessoriesmanagement"
                  className={`text-${
                    isActive("/admin/accessoriesmanagement")
                      ? "[#fff] pb-1  border-b-[3px] border-b-[#fff]"
                      : "[#000]"
                  } hover:text-[#fff] text-sm no-underline`}
                >
                  Accessories Management
                </Link>
                <Link
                  href="/admin/managearticles"
                  className={`text-${
                    isActive("/admin/managearticles")
                      ? "[#fff] pb-1  border-b-[3px] border-b-[#fff]"
                      : "[#000]"
                  } hover:text-[#fff] text-sm no-underline`}
                >
                  Manage Article
                </Link>
              </div>

              <div className="md:flex items-center gap-4">
                {/* Your other content here */}
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
            </div>
          )}
        </nav>
      )}
    </div>
  );
};

export default AdminNav;
