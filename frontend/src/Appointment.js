import React, { useState } from "react";

function Appointment({ setPage }) {

  const [name, setName] = useState("");
 
  const bookAppointment = (e) => {
    e.preventDefault();

    alert("Appointment booked for " + name);
  };

  return (
    <div style={{padding:"40px"}}>

      <h1>Book Appointment </h1>

      <form onSubmit={bookAppointment}>

        <input
          type="text"
          placeholder="Patient Name"
          onChange={(e) => setName(e.target.value)}
        />

        <br/><br/>

        <input
          type="text"
          placeholder="Problem"
          onChange={(e) => setProblem(e.target.value)}
        />

        <br/><br/>

        <button type="submit">
          Book Appointment
        </button>

      </form>

      <br/>

      <button onClick={() => setPage("dashboard")}>
        Back
      </button>

    </div>
  );
}

export default Appointment;
