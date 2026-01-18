import ThemeButton from "@components/button/ThemeButton";
import { menuList } from "@utils/index";
import { Link, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import useMediaQuery from "@hooks/matchMedia";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const { pathname } = useLocation();
  const activeName = pathname === "/" ? "home" : pathname.split("/")[1];
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpanded, isMobile]);

  if (activeName === "home") return null;

  const activeMenu = menuList.find((menu) => menu.name === activeName);
  const inactiveMenus = menuList.filter((menu) => menu.name !== activeName);

  /* ================= MOBILE ================= */
  if (isMobile) {
    return (
      <>
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="fixed top-0 py-4 left-6 z-50 w-full flex justify-start "
          >
            <MenuRoundedIcon
              className="text-black-80 dark:text-off-white bg-off-white dark:bg-black-80"
              sx={{ width: 32, height: 32 }}
            />
          </button>
        )}

        {isExpanded && (
          <aside className="fixed inset-0 z-50 bg-off-white dark:bg-black-80 flex flex-col p-6">
            <div className="flex justify-end">
              <button onClick={() => setIsExpanded(false)}>
                <CloseRoundedIcon
                  className="text-black-80 dark:text-off-white"
                  sx={{ width: 28, height: 28 }}
                />
              </button>
            </div>

            <nav className="flex flex-col flex-1 items-center justify-center gap-6">
              <Link
                to="/"
                onClick={() => setIsExpanded(false)}
                className="text-5xl sm:text-7xl font-heading text-black-80 dark:text-off-white"
              >
                Home
              </Link>

              {menuList.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsExpanded(false)}
                  className="text-5xl sm:text-7xl font-heading text-black-80 dark:text-off-white"
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-20">
                <ThemeButton />
              </div>
            </nav>
          </aside>
        )}
      </>
    );
  }

  /* ================= DESKTOP ================= */
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-transparent backdrop-blur-3xl flex flex-col items-center justify-between py-6">
      <nav className="flex flex-col items-center gap-16 mt-10">
        {activeMenu && (
          <SidebarItem
            label={activeMenu.name}
            isActive
            color={activeMenu.color}
          />
        )}

        <div className="w-0.5 h-10 bg-black-80 dark:bg-off-white" />

        {inactiveMenus.map((menu) => (
          <Link to={menu.path} key={menu.name}>
            <SidebarItem label={menu.name} />
          </Link>
        ))}

        <Link to="/">
          <SidebarItem label="Home" />
        </Link>
      </nav>

      <div className="mb-4">
        <ThemeButton />
      </div>
    </aside>
  );
};

export default Sidebar;
