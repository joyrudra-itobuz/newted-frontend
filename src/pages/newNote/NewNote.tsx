import React from "react";
import SideBar from "../../components/sideBar/SideBar";
import Header from "../../components/newNote/Header";

export default function NewNote() {
  return (
    <div className="h-screen lg:flex bg-[#1E1E1E]">
      <SideBar />
      <Header />
    </div>
  );
}
