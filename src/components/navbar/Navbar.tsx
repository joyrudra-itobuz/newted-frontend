import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavPop from "./navPop/NavPop";

export default function Navbar() {
  const [navPopOpen, setNavPopOpen] = useState<boolean>(false);
  const token = localStorage.getItem("token");

  return (
    <nav className="bg-[#171717] p-5 flex justify-end sticky top-0">
      {token ? (
        <div
          className="relative"
          onClick={() => {
            setNavPopOpen(!navPopOpen);
          }}
        >
          <AccountCircleIcon />
          <div
            className={
              "absolute right-0" + (navPopOpen ? " block " : " hidden")
            }
          >
            <NavPop />
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
