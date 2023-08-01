import React, { ReactNode } from "react";
import SideBar from "../components/sideBar/SideBar";
import Navbar from "../components/navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const token = localStorage.getItem("token");

  return (
    <div>
      <aside className="flex">
        {token ? <SideBar /> : ""}
        <div className="flex flex-col w-full h-screen overflow-auto">
          {token ? <Navbar /> : ""}
          <main className="w-full h-full bg-[#1E1E1E] flex flex-col justify-center items-center">
            {children}
          </main>
        </div>
      </aside>
    </div>
  );
};

export default Layout;
