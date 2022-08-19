// import axios from "axios";
// import { useState } from "react";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [res, setRes] = useState("");

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const payload = {
//       email: email,
//       password: password,
//     };

//     axios
//       .post("https://reqres.in/api/register", payload)
//       .then((res) => setRes(res.data.token))
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div style={{ width: "100%" }}>
//       <div style={{ width: "400px", margin: "0 auto" }}>
//         <h1>Register Page</h1>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <label>Email</label>
//           <input onChange={(e) => handleEmail(e)} type="text" />
//         </div>
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <label>Password</label>
//           <input onChange={(e) => handlePassword(e)} type="text" />
//         </div>
//         <button onClick={handleRegister} style={{ width: "100%", marginTop: "12px" }}>
//           Register
//         </button>
//         {!!res.length && <h1>Anda sudah terdaftar</h1>}
//       </div>
//     </div>
//   );
// };

// export default Register;

import React from "react";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("https://reqres.in/api/register", payload)
      .then((res) => setResult(res.data.token))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "400px", margin: "0 auto" }}>
        <h1>Register Page</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Email</label>
          <input onChange={(e) => handleEmail(e)} type="text" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Password</label>
          <input onChange={(e) => handlePassword(e)} type="password" />
        </div>
        <button onClick={handleRegister} style={{ width: "100%", marginTop: "12px" }}>
          Register
        </button>
        {!!result.length && <h1>Selamat, Anda Berhasil</h1>}
      </div>
    </div>
  );
};

export default Register;
