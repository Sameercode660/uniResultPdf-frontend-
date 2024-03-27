import React, { useState } from "react";
import { Link } from "react-router-dom";


function Admin() {


  return (
    <div className="w-full min-h-screen flex justify-center items-center text-white">
      <div className="w-[300px] h-[400px] flex flex-col border-2 justify-center items-center space-y-6 rounded-2xl">
        <div className="flex justify-center items-center w-full">
          <p className="font-sans text-2xl antialiased font-bold">Admin</p>
        </div>
        <div className="flex justify-center items-center w-full">
          <input
            className="pl-2 pr-2 pt-1 pb-1 rounded-lg outline-none border border-cyan-500 placeholder:text-cyan-500 bg-transparent"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <input
            className="pl-2 pr-2 pt-1 pb-1 rounded-lg outline-none border border-cyan-500 placeholder:text-cyan-500 bg-transparent"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <input
            className="pl-2 pr-2 pt-1 pb-1 rounded-lg outline-none border border-cyan-500 placeholder:text-cyan-500 bg-transparent"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <input
            className="pl-2 pr-2 pt-1 pb-1 rounded-lg outline-none border border-cyan-500 placeholder:text-cyan-500 bg-transparent"
            type="text"
            name="code"
            id="code"
            placeholder="Enter admin Code"
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <Link to={"/uploadResult"}>
            <button className="text-black">SignIn</button>
          </Link>
        </div>
        <div>
          <Link to={"/"}>
            <span>As student</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Admin;
