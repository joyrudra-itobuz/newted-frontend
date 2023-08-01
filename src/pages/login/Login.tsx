import React, { FormEvent, useRef, useState } from "react";
import SideBar from "../../components/sideBar/SideBar";
import axiosInstance from "../../services/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import { whiteButton } from "../../stylesheets/tailwindStyles/button";
import { TextField } from "@mui/material";
import "./_login.scoped.scss";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const body = {
      username,
      password,
    };

    try {
      const { data } = await axiosInstance.post("/signin", body);

      console.log(data);

      if (data.success) {
        localStorage.setItem("token", data.data.token);
        navigate("/");
        window.location.reload();
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      return (
        <div>{error.message ?? "Sorry, Request Cannot Be Processed!"}</div>
      );
    }
  }

  return (
    <div className="h-full max-h-[28rem] mx-[20px] p-[20px] lg:p-12 md:w-3/4 lg:w-1/2 2xl:w-1/4 md:m-auto bg-gray-700 bg-opacity-20 shadow-strong">
      <h1 className="text-center font-bold text-4xl text-white">Log In</h1>

      <form className="" onSubmit={handleLogin}>
        <div className="flex flex-col gap-5">
          <TextField
            className="focus:outline-dashed"
            id="outlined-multiline-flexible"
            label="Username"
            multiline
            maxRows={4}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            className="focus:outline-dashed"
            id="outlined-multiline-flexible"
            label="Password"
            multiline
            maxRows={4}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className="text-white w-full p-2 mt-10 border hover:bg-white hover:text-black transition-all duration-300">
          Submit
        </button>
        <div className="mt-5 flex  text-white justify-between">
          <div className="flex flex-col gap-1">
            <h4>Don't have One?</h4>
            <Link to="/signup" className={whiteButton}>
              Create One Here!
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-right">Forgot?</h4>
            <Link to={"/reset-password"} className={whiteButton}>
              Reset Password
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
