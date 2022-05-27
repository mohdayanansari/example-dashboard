import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// Dummy Data
import { links } from "../../data/dummy";

// Use Context
import { useStateContext } from "../../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  //! Dynamic Classnames for active navLink State----------------------------------------------------
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-800 dark:text-gray-200 dark:hover:text-black hover:bg-gray-50 hover:drop-shadow-sm m-2";
  // !-----------------------------------------------------------------------------------------------

  return (
    <div className="h-screen pb-10 ml-3 overflow-auto md:overflow-hidden md:hover:overflow-auto">
      {activeMenu && (
        <>
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="flex items-center gap-3 mt-4 ml-3 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              <SiShopware /> <span>Admin Dashboard</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="p-3 mt-4 text-xl rounded-full hover:bg-light-gray dark:hover:text-black md:hidden lg:block dark:text-white"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          {/* Nav Items */}
          <div className="mt-10 ">
            {links.map((item, index) => (
              <div key={index}>
                <p className="m-3 mt-4 text-gray-400 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
