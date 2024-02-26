import React, { useState } from "react";
import Input from "../../components/Input/Input.jsx";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button.jsx";
import Alert from "../../components/Alert/alert.jsx";
import "./Signin.css";
export default function Signin() {
  const Navigate=useNavigate();
  const [formData, setData] = useState({ Name: "", Email: "", Password: "" });
  const [msg, setmsg] = useState({ mg: "", type: "" });

  const onChange = (e) => {
    setData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    if (
      formData.Name === "" ||
      formData.Email === "" ||
      formData.Password === ""
    ) {
      return setmsg({ msg: "Must fill all the fields", type: "danger" });
    }

    const responce = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: formData.Name,
        Email: formData.Email,
        Password: formData.Password,
      }),
    });
    const data = await responce.json();
    if (data.success) {
      localStorage.setItem("token", data.token);

      setmsg({ msg: data.msg, type: "success" });
      setTimeout(() => {
        Navigate('/')
      }, 2000);
    } else {
      setmsg({ msg: data.msg, type: "danger" });
    }
  };
  return (

    <div className="__bg">
      
          <div className="container">
      <div className="__signin">
        <h2 className="text-center my-2">Sign In</h2>
        <form onSubmit={submitForm}>
          <Input
            type="text"
            label="Name"
            placeholder="Enter your Name"
            name="Name"
            onChange={onChange}
          />
          <Input
            type="Email"
            label="Email"
            placeholder="Enter your Email"
            name="Email"
            onChange={onChange}
          />
          <Input
            type="Password"
            label="Password"
            placeholder="Enter your Password"
            name="Password"
            onChange={onChange}
          />
          <Button btntype="primary mt-3 float-end" btnName="Sign in" />
          <p className={`text-center text-${msg.type}`}>{msg.msg}</p>
        </form>
        
      </div>
    </div>
  {/* {msg.msg && <Alert msg={`${msg.msg}`} className='show' alertType={`${msg.type}`}/>} */}
    </div>
  );
}