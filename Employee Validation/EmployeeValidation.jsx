import React, { useState } from "react";

function EmployeeValidationForm() {
  const [user,setUser]=useState("")
  const [userErr,SetUserErr]=useState("Name must be at least 4 characters long and only contain letters and spaces")
  const [email,setEmail]=useState("")
  const [emailErr,setEmailErr]=useState("Email must be a valid email address")
  const [empid,setEmpId]=useState("")
  const [empidErr,setEmpIdErr]=useState("Employee ID must be exactly 6 digits")
  const [doj,setDOJ]=useState("")
  const [dojErr,setDOJErr]=useState("Joining Date cannot be in the future")
const isvalid=email && !emailErr && user && !userErr && doj && !dojErr && empid && !empidErr

 const handleUser=(e)=>{
    let a=e.target.value
     setUser(a)
      const nameRegex = /^[A-Za-z\s]{4,}$/;
      if(nameRegex.test(a)){
        SetUserErr("")
      }
      else{
        SetUserErr("Name must be at least 4 characters long and only contain letters and spaces");
      }
 }
const handleEmail=(e)=>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  setEmail(e.target.value)
  console.log(emailRegex.test(e.target.value))
    if(emailRegex.test(e.target.value)){
      setEmailErr("")
    }
    else{
      setEmailErr("Email must be a valid email address")
    }
}
const handleEmp = (e) => {
  let b = e.target.value;
  setEmpId(b);

  const empIdRegex = /^\d{6}$/; 

  if (empIdRegex.test(b)) {
    setEmpIdErr("");
  } else {
    setEmpIdErr("Employee ID must be exactly 6 digits");
  }
};
const handleDOJ=(e)=>{
  let da=e.target.value
   const selectedDate = new Date(e.target.value);
   setDOJ(da)
  const today = new Date();
  today.setHours(0, 0, 0, 0); 
  if (selectedDate > today) {
  
    setDOJErr("Joining Date cannot be in the future");
  } else {
    setDOJErr("")
  }


}


  return (
    <div className="layout-column align-items-center mt-20 ">
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-name">
        <input
          className="w-100"
          type="text"
          name="name"
          value={user}
          placeholder="Name"
          onChange={(e)=>handleUser(e)}
          data-testid="input-name-test"
        />
        {userErr && <div style={{color:"red"}}> {userErr}</div>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-email">
        <input
          className="w-100"
          type="text"
          name="email"
          value={email}
          onChange={(e)=>handleEmail(e)}
          placeholder="Email"
        />
        { emailErr&&<p className="error mt-2">{emailErr}</p> }
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-employee-id">
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={empid}
          onChange={(e)=>handleEmp(e)}
          placeholder="Employee ID"
        />
        { empidErr&&<p className="error mt-2" style={{color:"red"}}>{empidErr}</p>}
      </div>
      <div className="layout-column align-items-start mb-10 w-50" data-testid="input-joining-date">
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={doj}
          onChange={(e)=>handleDOJ(e)}
          placeholder="Joining Date"
        />
      {dojErr&& <p className="error mt-2">{dojErr}</p>}
      </div>
      
      <button data-testid="submit-btn" type="submit" disabled={!isvalid} >
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;
