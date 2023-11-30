"use client";
import { SIDEBAR_ITEMS } from "./sidebar-item";
import MenuItem from "./menu-item";

const Sidebar = () => {
  return (
    <div className="fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
      <div>
        {SIDEBAR_ITEMS.map((item, idx) => {
          return <MenuItem key={idx} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
