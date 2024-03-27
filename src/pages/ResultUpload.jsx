import React, { useState } from "react";
import axios from 'axios'

function ResultUpload() {

  const [file, setFile] = useState('')
  const [course, setCourse] = useState('fybba(ca)sem-I')
  const [buttonStatus, setButtonStatus] = useState('Upload')
  async function handleUploadResult() {
    setButtonStatus('Uploading...')
    const formData = new FormData()

    formData.append('resultFile', file)
    formData.append('course', course)

    const response = await axios.post('http://localhost:8080/student/set-result', formData)
    setButtonStatus('Uploaded')

    setTimeout(()=> {
      setButtonStatus('Upload')
    }, 3000)
    console.log(response.data)
  }
  return (
    <div className="w-full h-full flex justify-center items-center text-white">
      <div className="w-[300px] h-[300px] border-2 flex flex-col items-center justify-center space-y-5 rounded-md">
        <div className="w-full flex flex-col items-center justify-center">
          <label htmlFor="file">
            <span>
            <i className="fa-solid fa-file-excel text-3xl"></i>
            <p className="text-[10px] text-cyan-400">excel file</p>
            </span>
          </label>
          <input type="file" className="hidden" name="file" id="file" onChange={(e) => setFile(e.target.files[0])}/>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <label htmlFor="course">Select Course and Sem</label>
          <select
            name="course"
            id="course"
            className="bg-transparent text-white border border-cyan-500 p-2 rounded-md"
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="fybba(ca)sem-I" className="text-black">
              FY. BBA(CA) Sem-I
            </option>
            <option value="fybba(ca)sem-II" className="text-black">
              FY. BBA(CA) Sem-II
            </option>
            <option value="sybba(ca)sem-I" className="text-black">
              SY. BBA(CA) Sem-I
            </option>
            <option value="sybba(ca)sem-II" className="text-black">
              SY. BBA(CA) Sem-II
            </option>
            <option value="tybba(ca)sem-I" className="text-black">
              TY. BBA(CA) Sem-I
            </option>
            <option value="tybba(ca)sem-II" className="text-black">
              TY. BBA(CA) Sem-II
            </option>
          </select>
        </div>
        <div>
          <button className="text-black" onClick={handleUploadResult}>{buttonStatus}</button>
        </div>
      </div>
    </div>
  );
}

export default ResultUpload;
