import React from "react";
import SideBar from "../../components/sideBar/SideBar";
import Header from "../../components/newNote/Header";

export default function NewNote() {
  return (
    <div className="h-screen">
      <div className="h-[20vh]">
        <SideBar />
      </div>
      <div className="h-[80vh]">
        <Header />
      </div>
    </div>
  );
}
