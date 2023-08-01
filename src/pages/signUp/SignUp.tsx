import React, { FormEvent, useRef, useState } from "react";
import SideBar from "../../components/sideBar/SideBar";
import "./_style.scoped.scss";
import axios from "axios";
import config from "../../config/config";
import { log } from "console";
import { useNavigate, Link } from "react-router-dom";
import { whiteButton } from "../../stylesheets/tailwindStyles/button";
import { TextField } from "@mui/material";

export const SignUp: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const inputStyles = {
    borderColor: "white",
  };

  interface Response {
    data: [] | object;
    success: boolean;
    message: string;
  }

  async function handleSignUp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const body = {
      email,
      username,
      password,
    };

    console.log(body);

    let { data: response } = await axios.post(
      config.serverEndpoint + "/signup",
      body
    );

    if (response.success) {
      localStorage.setItem("token", response.data.token);
      navigate("/");
    }
  }

  return (
    <form
      className="mx-[20px] p-[20px] lg:p-12 md:w-3/4 lg:w-1/2 2xl:w-1/4 md:m-auto bg-gray-700 bg-opacity-20 shadow-strong"
      onSubmit={handleSignUp}
    >
      <h1 className="text-center font-bold text-4xl text-white">Sign Up</h1>

      <div className=" text-white flex flex-col gap-5 mt-5">
        <TextField
          className="focus:outline-dashed"
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          ref={emailRef}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          className="focus:outline-dashed"
          id="outlined-multiline-flexible"
          label="Username"
          multiline
          maxRows={4}
          ref={emailRef}
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

      <div className="flex gap-1 flex-col items-center ml-auto mt-5  ">
        <h4>Already have One?</h4>
        <Link to="/login" className={whiteButton}>
          Sign In Here!
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
