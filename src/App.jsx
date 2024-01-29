import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [number, setNumber] = useState('')
  const [motherName, setMotherName] = useState('')
  async function fetchData() {
    const data = {
      rollNumber: number,
      motherName
    }
    
    const response = await axios.post('http://localhost:8080/student/result', data, {
      responseType: 'blob'
    })

    console.log(response.data)
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(new Blob([response.data]))
    link.download = 'Sample.pdf'
    link.click()
  }

  return (
    <>
      <input type="number" name="rollnumber" id="rollnumber" placeholder='Enter your rollnumber' onChange={(e)=> {
        setNumber(+e.target.value)
      }}/>
      <input type="text" name="motherName" id="motherName" placeholder='Enter your mothername' onChange={(e)=> {
        setMotherName(e.target.value)
      }}/>
      <button onClick={fetchData}>Generate Pdfs</button>
    </>
  )
}

export default App
