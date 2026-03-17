import React from "react";

function Profile({ setPage }) {

  return (
    <div style={{padding:"40px"}}>

      <h1>Doctor Profile 👨‍⚕️</h1>

      <p><b>Name:</b> Dr.Victor</p>
      <p><b>Specialization:</b> Cardiologist</p>
      <p><b>Experience:</b> 10 Years</p>
      <p><b>Hospital:</b> City Care Hospital</p>

      <button onClick={() => setPage("dashboard")}>
        Back to Dashboard
      </button>

    </div>
  );
}

export default Profile;
