import React, { useEffect } from "react";
import "./_style.scoped.scss";
import SideBar from "../../components/sideBar/SideBar";
import AllNotes from "../../components/home/AllNotes";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { log } from "console";
import axiosInstance from "../../services/axiosInstance";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    validateUser();
  }, []);

  async function validateUser() {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }
    try {
      const response = await axiosInstance.get("/verify-user/" + token);

      if (!response.data.success) {
        localStorage.clear();
        navigate("/login");
        return;
      }
    } catch (error: any) {
      localStorage.clear();
      navigate("/login");
      console.log(error.message);
    }
  }
  return <AllNotes />;
}
