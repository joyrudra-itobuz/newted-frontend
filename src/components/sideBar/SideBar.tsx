import React from "react";
import "./_style.scoped.scss";
import notesIcon from "../../assets/images/Sidebar/noteIcon.svg";
import searchIcon from "../../assets/images/Sidebar/search.svg";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar font-[600] p-[20px] lg:w-1/5 xl:w-1/6">
      <div className="flex justify-between py-4">
        <Link to={"/"} className="flex gap-2">
          <h2 className="cursive-font">Nowted</h2>
          <img className="w-3 mb-auto" src={notesIcon} alt="notesIcon" />
        </Link>
        <button>
          <img src={searchIcon} alt="search-icon" />
        </button>
      </div>
      <Link
        to={"/new-note"}
        className="text-xl flex gap-5 xl:justify-center p-2 bg-gray-300 bg-opacity-10 w-full"
      >
        <span className="text-4xl ">+</span>{" "}
        <p className="my-auto mt-2">New Note</p>
      </Link>
    </div>
  );
}

export default React.memo(SideBar);
