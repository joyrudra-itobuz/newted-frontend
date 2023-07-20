import React from "react";
import "./_style.scoped.scss";
import SideBar from "../../components/sideBar/SideBar";
import AllNotes from "../../components/home/AllNotes";

export default function Home() {
  return (
    <div>
      <SideBar />
      <AllNotes />
    </div>
  );
}
