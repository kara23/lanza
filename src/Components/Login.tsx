import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
const baseURL = "https://reqres.in/api/login";

// declare interface
interface loginValue {
  email: string;
  password: string;
  loginResponse: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [error, setError] = useState("");
  const [showError, setShowError] = useState("d-none");

  const details: loginValue = {
    email: email,
    password: password,
    loginResponse: (error = "Invalid login"),
  };
  let login = async (e: any) => {
    e.preventDefault();
    await axios
      .post(baseURL, {
        email: details.email,
        password: details.password,
      })
      .then((response) => {
        if (response.status === 200) {
          document.title = "Lanza | Users";
          alert("Response: Successful. \nToken: " + response.data.token);
          setShowError("d-none");
          navigate("/Landing_page");
        } else {
          setShowError("d-block");
          setError(details.loginResponse);
        }
      })
      .catch((error) => {
        setShowError("d-block");
        setError("Error: Bad request");
        console.log(error);
      });
  };
  return (
    <Container>
      <Row className="justify-content-center vh-100 align-items-center">
        <Col lg={4}>
          <form onSubmit={login}>
            <div className="login-container">
              <div className="login-header">Login</div>
              <div className="login-elements">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="mb-3"
                />
                <br />
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="mb-1"
                />
                <br />
                <label className={showError + " text-red"}>
                  {error}
                  <br />
                </label>
                <Button
                  type="submit"
                  className="btn login-btn text-white text-medium mt-3"
                >
                  Login
                </Button>
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
