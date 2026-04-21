import React, { useState } from 'react'
import students from '../data.json'
import '../App.css'
const Reportcard = () => {

  const [studentData, setStudentData] = useState(students)
  console.log(students)
  let isLogin= false
  let passed = studentData.filter((item) => {
    return item.marks >= 50
  })
  let failed = studentData.filter((item) => {
    return item.marks < 50
  })
  let average = studentData.reduce((total, item) => {
    return total + Number(item.marks)
  }, 0) / studentData.length

  let studentObj = {
    name: '',
    marks: ''
  }

  function submitHandler(event) {
    event.preventDefault()

    studentObj.name = event.target.name.value
    studentObj.marks = event.target.marks.value

    console.log(studentObj)
    setStudentData((preData) => {
      return [...preData, studentObj]
    })

  }
  

return (
  <div>
    {/* HEADER */}
    <div className="header">
      <h1>Report Card</h1>
    </div>

    <div className="container">

      {/* STATS CARD */}
      <div className="stats">
        <p>Total: {studentData.length}</p>
        <p className="pass">Passed: {passed.length}</p>
        <p className="fail">Failed: {failed.length}</p>
        <p>Average: {average.toFixed(2)}</p>
      </div>

      {/* FORM */}
      <form onSubmit={submitHandler} className="form">
        <input placeholder='Name' name='name' required />
        <input placeholder='Marks' name='marks' type='number' min='0' max='100' required />
        <button type='submit'>Add Student</button>
      </form>

      {/* STUDENTS LIST */}
      <div className="students">
        {
          studentData.map((item, index) => (
            <div key={index} className="card">
              <h3>{item.name}</h3>
              <p className={item.marks >= 50 ? "pass" : "fail"}>
                {item.marks} Marks
              </p>
            </div>
          ))
        }
      </div>

    </div>
  </div>
)
}

export default Reportcard
