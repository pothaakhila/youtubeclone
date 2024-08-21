import React, { useState } from "react";
import ramisettylogo from "../images/ramisetty_logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiList from "../ApiList/ApiList";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("login");

  const [users, setUsers] = useState({
    employeetype: "",
    employeedomain: "",
    name: "",
    email: "",
    contactnumber: "",
    password: "",
    confirmpassword: "",
  });

  
  const {
    employeetype,
    employeedomain,
    name,
    email,
    contactnumber,
    password,
    confirmpassword,
  } = users;

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Debugging: Log current state
    console.log("Users state:", users);

    // Validation
    if (!employeetype || !employeedomain || !name || !email || !contactnumber || !password || !confirmpassword) {
      console.error("All fields are required.");
      return;
    }

    if (password !== confirmpassword) {
      console.error("Passwords do not match.");
      return;
    }

    axios
      .post(apiList.signup, users)
      .then((res) => {
        if (res.status === 200) {
          setLogin("login");
          setUsers({
            employeetype: "",
            employeedomain: "",
            name: "",
            email: "",
            contactnumber: "",
            password: "",
            confirmpassword: "",
          });
        }
      })
      .catch((err) => {
        console.error("Signup error:", err.response ? err.response.data : err.message);
      });
  };
  
  

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post(apiList.login, { email, password })
      .then((res) => {
        if (res.status === 200) {
          const { EmployeeType, EmployeeDomain, token } = res.data;
          localStorage.setItem("token", token);

          if (EmployeeType === "home") {
            navigate("/home");
          } else if (EmployeeType === "react") {
            navigate("/react");
          } else {
            navigate("/home");
          }

          if (EmployeeDomain === "frontend developer") {
            console.log("frontend success")
          } else if (EmployeeDomain === "backend developer") {
            console.log("frontend success")
          } else {
            console.log("frontend success")
          }
        }
      })
      .catch((err) => {
        console.error("Login error:", err.response ? err.response.data : err.message);
      });
  };

  return (
    <div className="login_page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="">
              <div className="row">
                <div className="col-md-12">
                  {login === "login" && (
                    <form className="login_page_card" onSubmit={handleLogin}>
                      <div className="row">
                        <div className="col-md-5 m-auto">
                          <div>
                            <img src={ramisettylogo} className="img-fluid" alt="logo" />
                          </div>
                        </div>
                        <div className="col-md-7">
                          <h2 style={{ color: "#ff3232" }} className="login_head">Login</h2>
                          <div className="text-left">
                            <label>Email</label>
                          </div>
                          <input
                            type="text"
                            name="email"
                            value={email}
                            className="form-control login_formcontrol"
                            onChange={handleChange}
                          />
                          <div className="text-left">
                            <label>Password</label>
                          </div>
                          <input
                            type="password"
                            name="password"
                            value={password}
                            className="form-control login_formcontrol"
                            onChange={handleChange}
                          />
                          <div className="login_button">
                            <button type="submit">Login</button>
                          </div>
                          <div>
                            <p>
                              I don't have an account?{" "}
                              <button type="button" onClick={() => setLogin("signup")} className="login_navigatebtn">
                                Signup
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                  {login === "signup" && (
                    <form className="signup_page_card" onSubmit={handleSignup}>
                      <div className="row">
                        <div className="col-md-5 m-auto">
                          <div>
                            <img src={ramisettylogo} className="img-fluid" alt="logo" />
                          </div>
                        </div>
                        <div className="col-md-7">
                          <h2 style={{ color: "#ff3232" }} className="login_head">Signup</h2>
                          <div className="text-left">
                            <label>Type of Signup</label>
                          </div>
                          <select
                            className="form-control login_formcontrol"
                            style={{ cursor: "pointer" }}
                            value={employeetype}
                            name="employeetype"
                            onChange={handleChange}
                          >
                            <option hidden>----- Select -----</option>
                            <option value="javascript">JavaScript</option>
                            <option value="react">React.js</option>
                            <option value="node">Node.js</option>
                          </select>
                          <div className="text-left">
                            <label>Domain</label>
                          </div>
                          <select
                            className="form-control login_formcontrol"
                            style={{ cursor: "pointer" }}
                            value={employeedomain}
                            name="employeedomain"
                            onChange={handleChange}
                          >
                            <option hidden>----- Select -----</option>
                            <option value="frontend developer">Frontend Developer</option>
                            <option value="backend developer">Backend Developer</option>
                            <option value="full stack developer">Full Stack Developer</option>
                          </select>
                          <div className="text-left">
                            <label>Name</label>
                          </div>
                          <input
                            type="text"
                            value={name}
                            name="name"
                            className="form-control login_formcontrol"
                            onChange={handleChange}
                          />
                          <div className="text-left">
                            <label>Email</label>
                          </div>
                          <input
                            type="text"
                            value={email}
                            name="email"
                            className="form-control login_formcontrol"
                            onChange={handleChange}
                          />
                          <div className="text-left">
                            <label>Contact number</label>
                          </div>
                          <input
                            type="text"
                            value={contactnumber}
                            name="contactnumber"
                            className="form-control login_formcontrol"
                            onChange={handleChange}
                          />
                          <div className="text-left">
                            <label>Password</label>
                          </div>
                          <input
                            type="password"
                            value={password}
                            name="password"
                            className="form-control login_formcontrol"
                            onChange={handleChange}
                          />
                          <div className="text-left">
                            <label>Confirm password</label>
                          </div>
                          <input
                            type="password"
                            value={confirmpassword}
                            name="confirmpassword"
                            className="form-control login_formcontrol"
                            onChange={handleChange}
                          />
                          <div className="login_button">
                            <button type="submit">Signup</button>
                          </div>
                          <div>
                            <p>
                              I already have an account?{" "}
                              <button type="button" onClick={() => setLogin("login")} className="login_navigatebtn">
                                Login
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
