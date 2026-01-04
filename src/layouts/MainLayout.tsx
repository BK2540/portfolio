import Sidebar from "@components/navigation/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex bg-off-white dark:bg-black-80 p-8">
      <Sidebar />

      <main className="flex-1 container mx-auto max-w-7xl">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
