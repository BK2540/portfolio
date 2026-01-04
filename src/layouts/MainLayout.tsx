import Sidebar from "@components/navigation/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen lg:max-h-screen lg:overflow-hidden flex bg-off-white dark:bg-black-80 p-8">
      <Sidebar />

      <main className="flex-1 container pl-16 lg:pl-20 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
