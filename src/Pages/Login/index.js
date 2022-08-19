import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = ({ setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  let navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("https://reqres.in/api/login", payload)
      .then((res) => {
        setResult(res.data.token);
        console.log(res.data.token);
        setIsLogin(true);
        localStorage.setItem("myToken", res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "400px", margin: "0 auto" }}>
        <h1>Login Page</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Email</label>
          <input onChange={(e) => handleEmail(e)} type="text" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Password</label>
          <input onChange={(e) => handlePassword(e)} type="password" />
        </div>
        <button onClick={handleLogin} style={{ width: "100%", marginTop: "12px" }}>
          Login
        </button>
        {!!result.length && <h1>Selamat, Anda Berhasil. Token Anda adalah {localStorage.getItem("myToken")}</h1>}
      </div>
    </div>
  );
};

export default Login;
