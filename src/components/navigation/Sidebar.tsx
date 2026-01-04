import ThemeButton from "@components/button/ThemeButton";
import { menuList } from "@utils/index";
import { Link, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { pathname } = useLocation();
  const activeName = pathname === "/" ? "home" : pathname.split("/")[1];

  // hide sidebar on home
  if (activeName === "home") return null;

  const activeMenu = menuList.find((menu) => menu.name === activeName);

  const inactiveMenus = menuList.filter((menu) => menu.name !== activeName);

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-transparent backdrop-blur-3xl flex flex-col items-center justify-between py-6">
      <nav className="flex flex-col items-center gap-16 mt-10">
        {/* Active menu (with color) */}
        {activeMenu && (
          <SidebarItem
            label={activeMenu.name}
            isActive
            color={activeMenu.color}
          />
        )}

        {/* Divider */}
        <div className="w-0.5 h-10 bg-off-white" />

        {/* Other menus */}
        {inactiveMenus.map((menu) => (
          <Link to={menu.path} key={menu.name}>
            <SidebarItem label={menu.name} />
          </Link>
        ))}

        {/* Home */}
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
