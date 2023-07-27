import React, { useRef } from "react";
import SideBar from "../../components/sideBar/SideBar";
import "./_style.scoped.scss";
import axios from "axios";
import config from "../../config/config";
import { log } from "console";

export const SignUp: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

  async function handleSignUp() {
    const formData = new FormData();
    const body = {
      email: emailRef.current?.value,
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    };

    console.log(formData.forEach((value) => console.log(value)));

    const response = await axios.post(config.serverEndpoint + "/signup", body);

    console.log(response.data);
  }

  return (
    <div className="bg-[#1E1E1E] sign-up">
      <SideBar />
      <div className="p-[20px]">
        <h1 className="text-center font-bold text-4xl text-white">Sign Up</h1>

        <div className=" text-white">
          <div className="flex flex-col ">
            <p>Email</p>
            <input
              ref={emailRef}
              type="email"
              className="focus:outline-dashed"
            />
          </div>
          <div className="flex flex-col">
            <p>Username</p>
            <input
              ref={usernameRef}
              type="text"
              className="focus:outline-dashed"
            />
          </div>
          <div className="flex flex-col">
            <p>Password</p>
            <input
              ref={passwordRef}
              type="password"
              className="focus:outline-dashed"
            />
          </div>
          <div className="flex flex-col">
            <p>Confirm Password</p>
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
