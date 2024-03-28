import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import "./animation.css"
import {Link} from 'react-router-dom'

function App() {
  const [number, setNumber] = useState("");
  const [motherName, setMotherName] = useState("");
  const [course, setCourse] = useState(null)

  async function fetchData() {

    try {
      if(!number || !motherName || !course) {
        alert('any one field is empty')
        return;
      }
      const data = {
        rollNumber: number,
        motherName,
        course
      };
  
      const response = await axios.post(
        "http://localhost:8080/student/result",
        data,
        {
          responseType: "blob",
        }
      );
  
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(new Blob([response.data]));
      link.download = "Sample.pdf";
      link.click();
    } catch (error) {
      console.log(error)
      alert('Result is not found')
    }
  }

  return (
    <>
      {/* <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-transparent"> */}
        <div className="container w-[300px] h-[400px] flex flex-col items-center justify-center border-2 border-cyan-500 gap-5 rounded-3xl">
          <div className="  text-2xl text-cyan-500">
            <span>Search Results</span>
          </div>
          <input
            className="bg-transparent outline-none border border-cyan-500 p-2 rounded-md   placeholder-cyan-200 text-cyan-500"
            type="text"
            name="rollnumber"
            id="rollnumber"
            placeholder="Enter your rollnumber"
            onChange={(e) => {
              setNumber(+e.target.value);
            }}
          />
          <input
             className="bg-transparent outline-none border border-cyan-500 p-2 rounded-md   placeholder-cyan-200 text-cyan-500"
            type="text"
            name="motherName"
            id="motherName"
            placeholder="Enter your mothername"
            onChange={(e) => {
              setMotherName(e.target.value);
            }}
          />

          <select name="semester" id="semester" className="bg-transparent text-white border border-cyan-500 p-2 rounded-md" onChange={((e)=> setCourse(e.target.value))}>
            <option value={null} className="text-black">Please Select year and semester</option>
            <option value="fybba(ca)sem-I" className="text-black">FY. BBA(CA) Sem-I</option>
            <option value="fybba(ca)sem-II"  className="text-black">FY. BBA(CA) Sem-II</option>
            <option value="sybba(ca)sem-I"  className="text-black">SY. BBA(CA) Sem-I</option>
            <option value="sybba(ca)sem-II"  className="text-black">SY. BBA(CA) Sem-II</option>
            <option value="tybba(ca)sem-I"  className="text-black">TY. BBA(CA) Sem-I</option>
            <option value="tybba(ca)sem-II"  className="text-black">TY. BBA(CA) Sem-II</option>
          </select>
          <button onClick={fetchData} className="bg-transparent text-white border border-cyan-500">Results</button>
          
          <Link to={'/admin'}>
            <span>Login as admin</span>
          </Link>
        </div>
      {/* </div> */}
    </>
  );
}

export default App;
