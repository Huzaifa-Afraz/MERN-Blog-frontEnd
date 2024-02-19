import React, { useState, useEffect } from "react";
import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import Alert from "../../components/Alert/alert.jsx";
import "./Signin.css";

export default function Signin() {
  const [formData, setData] = useState({ Name: "", Email: "", Password: "" });
  const [msg, setmsg] = useState({ msg: "", type: "" });
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Display the toast when there is a message
    if (msg.msg) {
      setShowToast(true);

      // Automatically hide the toast after 3 seconds
      const timer = setTimeout(() => {
        setShowToast(false);
        setmsg({ msg: "", type: "" }); // Clear the message after hiding
      }, 3000);

      // Clear the timer if the component unmounts or showToast changes
      return () => clearTimeout(timer);
    }
  }, [msg.msg]);

  const onChange = (e) => {
    setData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (formData.Name === "" || formData.Email === "" || formData.Password === "") {
      return setmsg({ msg: "Must fill all the fields", type: "danger" });
    }

    const response = await fetch("http://localhost:5000/auth/login", {
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

    const data = await response.json();
    if (data.success) {
      localStorage.setItem("token", data.token);
      setmsg({ msg: data.msg, type: "success" });
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
          </form>
        </div>
      </div>

      {/* Bootstrap Toast */}
      <div
        className={`toast align-items-center text-white bg-${msg.type} position-fixed bottom-0 end-0`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style={{ zIndex: 9999 }}
        hidden={!showToast}
      >
        <div className="d-flex">
          <div className="toast-body">{msg.msg}</div>
          <button
            type="button"
            className="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={() => setShowToast(false)}
          ></button>
        </div>
      </div>
    </div>
  );
}
