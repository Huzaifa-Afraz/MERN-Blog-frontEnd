import React, { useState,useRef } from "react";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import Alert from "../../components/Alert/alert.jsx";
import "./Signin.css";
export default function Signin() {
  const [formData, setData] = useState({ Name: "", Email: "", Password: "" });
  const [msg, setmsg] = useState({ mg: "", type: "" });
  const toastRef = useRef(null);
  const showToast = (message, type) => {
    setmsg({ msg: message, type: type });
    const toastElement = new window.bootstrap.Toast(toastRef.current);
    toastElement.show();

    setTimeout(() => {
      toastElement.hide();
    }, 3000);
  };
  const onChange = (e) => {
    setData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  };
  // var toast=document.getElementsByClassName('toast');
  // toast.show();

  const submitForm = async (e) => {
    e.preventDefault();

    if (
      formData.Name === "" ||
      formData.Email === "" ||
      formData.Password === ""
    ) {
      return showToast("Must fill all the fields", "danger");;
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

      // setmsg({ msg: data.msg, type: "success" });
      showToast(data.msg, "success");
    } else {
      // setmsg({ msg: data.msg, type: "danger" });
      showToast(data.msg, "danger");
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
          {/* <p className={`text-center text-${msg.type}`}>{msg.msg}</p> */}
        </form>
        
      </div>
    </div>
    <Alert id="myToast" msg={`${msg.msg}`} alertType={`${msg.type}`} ref={toastRef}/>
    </div>
  );
}