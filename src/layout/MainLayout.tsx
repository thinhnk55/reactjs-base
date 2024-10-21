import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";

const MainLayout: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  function toggleSidebar(): void {
    setSidebarOpen((prev) => !prev);
  }

  return (
    <div className="flex">
      <div
        className={`w-48 fixed md:static transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 z-10`}
      >
        <SideBar />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="md:hidden">
          <Header onToggleSidebar={toggleSidebar} showAvatar={!sidebarOpen} />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
