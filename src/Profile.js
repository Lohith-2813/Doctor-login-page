<<<<<<< HEAD
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
=======
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
>>>>>>> f2d865f41bf477ca208e6c293c2fe4f261f08414
