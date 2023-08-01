import React, { useEffect } from "react";
import "./_style.scoped.scss";
import SideBar from "../../components/sideBar/SideBar";
import AllNotes from "../../components/home/AllNotes";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    validateUser();
  }, []);

  async function validateUser() {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signup");
      return;
    }
    try {
      const { data } = await axios.get("verify-user/" + token);

      if (!data.success) {
        if (!token) {
          navigate("/signup");
          return;
        }
      }
    } catch (error) {
      return error;
    }
  }
  return (
    <div className="h-screen lg:flex">
      <SideBar />
      <div className="w-full">
        <AllNotes />
      </div>
    </div>
  );
}
