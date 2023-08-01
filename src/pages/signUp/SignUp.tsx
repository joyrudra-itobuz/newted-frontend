import React, { useRef } from "react";
import SideBar from "../../components/sideBar/SideBar";
import "./_style.scoped.scss";
import axios from "axios";
import config from "../../config/config";
import { log } from "console";
import { useNavigate } from "react-router-dom";

export const SignUp: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  interface Response {
    data: [] | object;
    success: boolean;
    message: string;
  }

  async function handleSignUp() {
    const body = {
      email: emailRef.current?.value,
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    };

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
    <div className="bg-[#1E1E1E] sign-up lg:flex h-screen">
      <SideBar />
      <div className="mx-[20px] p-[20px] lg:p-12 md:w-3/4 lg:w-1/2 2xl:w-1/4 md:m-auto bg-gray-700 bg-opacity-20">
        <h1 className="text-center font-bold text-4xl text-white">Sign Up</h1>

        <div className=" text-white flex flex-col gap-5">
          <div className="flex flex-col ">
            <label>Email</label>
            <input
              ref={emailRef}
              type="email"
              className="focus:outline-dashed"
            />
          </div>
          <div className="flex flex-col">
            <label>Username</label>
            <input
              ref={usernameRef}
              type="text"
              className="focus:outline-dashed"
            />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input
              ref={passwordRef}
              type="password"
              className="focus:outline-dashed"
            />
          </div>
          <div className="flex flex-col">
            <label>Confirm Password</label>
            <input
              ref={confirmPasswordRef}
              type="password"
              className="focus:outline-dashed"
            />
          </div>
        </div>
        <button
          className="text-white w-full p-2 mt-10 border hover:bg-white hover:text-black transition-all duration-300"
          onClick={handleSignUp}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUp;
