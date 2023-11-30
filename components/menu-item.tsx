"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./sidebar-item";
import { Icon } from "@iconify/react";

const MenuItem = ({ item }: { item: SidebarItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className="flex flex-col px-2 py-4">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row p-2.5 mx-2 items-center rounded-md cursor-pointer text-white justify-between w-full${
              pathname.includes(item.path) ? "bg-blue-600 " : ""
            }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="text-base ml-4 text-gray-200">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>

          {subMenuOpen && (
            <div className="my-2 ml-4 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`flex flex-row p-2.5 mx-2 items-center rounded-md cursor-pointer hover:bg-blue-600 text-white ${
                      subItem.path === pathname ? "bg-blue-600" : ""
                    }`}
                  >
                    {subItem.icon}
                    <span
                      className={`text-base ml-4 text-gray-200 ${
                        subItem.path === pathname ? "font-bold" : ""
                      }`}
                    >
                      {subItem.title}
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row p-2.5 mx-2 items-center rounded-md cursor-pointer hover:bg-blue-600  text-white w-full ${
            item.path === pathname ? "bg-blue-600 " : ""
          }`}
        >
          {item.icon}
          <span
            className={`text-base ml-4 text-gray-200 ${
              item.path === pathname ? "font-bold" : ""
            }`}
          >
            {item.title}
          </span>
        </Link>
      )}
    </div>
  );
};

export default MenuItem;
