import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Emmanuel");
  const [lastName, setLastName] = useState("Kipsang");
  const [submittedData, setSubmittedData] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
 // add state for holding ero messages
  const [errors, setErrors] = useState([]);

  function handleSubmit (event) {
    event.preventDefault();
    //first name is required
    if(firstName.length > 0) {
      const formData = {firstName: firstName, lastName: lastName};
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    }else {
      setErrors(["First name is required!"])
    }

    }
 
  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>

        {/* conditionally render error messages*/}
      {/* conditionally render error messages*/}
      {errors.length > 0 ? errors.map((error, index) => (
        <p key={index} style={{color: "red"}}>
          {error}
        </p>
      )) : null}

      <h3>Submissions</h3>
      {listOfSubmissions}
    </>

  );
}

export default Form;
