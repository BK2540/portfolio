import Sidebar from "@components/navigation/Sidebar";
import useMediaQuery from "@hooks/matchMedia";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      className={`min-h-screen flex bg-off-white dark:bg-black-80 p-8 overflow-x-hidden`}
    >
      <Sidebar />

      <main
        className={`flex-1 ${
          isMobile ? "pl-0 pt-4" : "ml-16 lg:ml-20"
        }  mx-auto w-full  flex justify-center`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
