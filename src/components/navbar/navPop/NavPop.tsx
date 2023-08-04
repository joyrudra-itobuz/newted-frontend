import React from "react";
import { useNavigate } from "react-router-dom";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

export default function NavPop() {
  const liStyles = "bg-stone-900 px-4";
  const navigate = useNavigate();

  async function handleLogout() {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  }

  return (
    <ul className="bg-gray-400 bg-opacity-25 p-3 flex flex-col gap-2 w-[10rem] backdrop-blur-3xl">
      <li className={`${liStyles} flex gap-2`}>
        <ManageAccountsRoundedIcon className="text-blue-600" />{" "}
        <p className="my-auto">Profile</p>
      </li>
      <li className={`${liStyles} flex gap-2`}>
        <ManageAccountsRoundedIcon className="text-green-600" />{" "}
        <p className="my-auto">Settings</p>
      </li>
      <li className={`${liStyles} flex gap-2`}>
        <LogoutRoundedIcon className="text-red-400" />{" "}
        <button onClick={handleLogout}>
          <p className="my-auto">Logout</p>
        </button>
      </li>
    </ul>
  );
}
