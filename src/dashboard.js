<<<<<<< HEAD
import React from "react";

function Dashboard({ setPage }) {

  return (
    <div style={{padding:"40px"}}>

      <h1>Doctor Dashboard </h1>

      <button onClick={() => setPage("profile")}>
        Doctor Profile
      </button>

      <button onClick={() => setPage("appointment")}>
        Book Appointment
      </button>

      <button onClick={() => setPage("login")}>
        Logout
      </button>

      <h2>Today's Appointments</h2>

      <table border="1" cellPadding="10">
        <tr>
          <th>Patient</th>
          <th>Time</th>
          <th>Problem</th>
        </tr>

        <tr>
          <td>Mr.Vinayak</td>
          <td>10:00 AM</td>
          <td>Fever</td>
        </tr>

        <tr>
          <td>Mr.Arjun</td>
          <td>11:30 AM</td>
          <td>Headache</td>
        </tr>

        <tr>
            <td>Mr.Sathya Dev</td>
            <td>1:00 PM</td>
            <td>Body Pain</td>
        </tr>

        <tr>
            <td>Mr.Ajay</td>
            <td>3:00 PM</td>
            <td>Typhoid</td>
        </tr>

      </table>

    </div>
  );
}

export default Dashboard;
=======
import React from "react";

function Dashboard({ setPage }) {

  return (
    <div style={{padding:"40px"}}>

      <h1>Doctor Dashboard </h1>

      <button onClick={() => setPage("profile")}>
        Doctor Profile
      </button>

      <button onClick={() => setPage("appointment")}>
        Book Appointment
      </button>

      <button onClick={() => setPage("login")}>
        Logout
      </button>

      <h2>Today's Appointments</h2>

      <table border="1" cellPadding="10">
        <tr>
          <th>Patient</th>
          <th>Time</th>
          <th>Problem</th>
        </tr>

        <tr>
          <td>Mr.Vinayak</td>
          <td>10:00 AM</td>
          <td>Fever</td>
        </tr>

        <tr>
          <td>Mr.Arjun</td>
          <td>11:30 AM</td>
          <td>Headache</td>
        </tr>

        <tr>
            <td>Mr.Sathya Dev</td>
            <td>1:00 PM</td>
            <td>Body Pain</td>
        </tr>

        <tr>
            <td>Mr.Ajay</td>
            <td>3:00 PM</td>
            <td>Typhoid</td>
        </tr>

      </table>

    </div>
  );
}

export default Dashboard;
>>>>>>> f2d865f41bf477ca208e6c293c2fe4f261f08414
