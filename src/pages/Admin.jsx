import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAdminContext from "../context/AdminLogin";

function Admin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secretCode, setSecretCode] = useState("");
  const [buttonState, setButtonState] = useState(true);
  const {setIsAuthorised} = useAdminContext()
  const navigate = useNavigate()
  async function handleAdminLogin() {
    try{
      if(!name || !email || !password || !secretCode) {
        alert('Any one field is empty')
        return ;
      }

      const data = {
        name, 
        email, 
        password,
        secretCode
      }

      const response = await axios.post('http://localhost:8080/student/admin-login', data)

      console.log(response.data)
      if(response.data.status) {
        setIsAuthorised(true)
        navigate('/uploadResult')
      }
    }catch(error) {
      alert('Crendentials are incorrect')      
    }
  }

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
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <input
            className="pl-2 pr-2 pt-1 pb-1 rounded-lg outline-none border border-cyan-500 placeholder:text-cyan-500 bg-transparent"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <input
            className="pl-2 pr-2 pt-1 pb-1 rounded-lg outline-none border border-cyan-500 placeholder:text-cyan-500 bg-transparent"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center items-center w-full">
          <input
            className="pl-2 pr-2 pt-1 pb-1 rounded-lg outline-none border border-cyan-500 placeholder:text-cyan-500 bg-transparent"
            type="text"
            name="code"
            id="code"
            placeholder="Enter admin Code"
            value={secretCode}
            onChange={(e) => {
              setSecretCode(e.target.value);
              if(secretCode.length != 0) {
                setButtonState(false)
              } else {
                setButtonState(true)
              }
            }}
          />
        </div>
        <div className="flex justify-center items-center w-full">
            <button onClick={handleAdminLogin} className={`text-black ${buttonState ? 'cursor-not-allowed' : 'cursor-pointer'}`}  disabled={buttonState}>
              SignIn
            </button>
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
