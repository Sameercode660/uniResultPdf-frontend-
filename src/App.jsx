import { useState } from "react";
import "./App.css";
import axios from "axios";
import "./animation.css"

function App() {
  const [number, setNumber] = useState("");
  const [motherName, setMotherName] = useState("");
  async function fetchData() {
    const data = {
      rollNumber: number,
      motherName,
    };

    const response = await axios.post(
      "http://localhost:8080/student/result",
      data,
      {
        responseType: "blob",
      }
    );

    console.log(response.data);
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(new Blob([response.data]));
    link.download = "Sample.pdf";
    link.click();
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
          <button onClick={fetchData} className="bg-transparent text-white border border-cyan-500">Results</button>
        </div>
      {/* </div> */}
    </>
  );
}

export default App;
