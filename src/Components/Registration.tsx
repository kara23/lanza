import { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState("d-none");
  let [error, setError] = useState("");

  const baseURL = "https://reqres.in/api/register";
  // declare interface
  interface registrationValue {
    email: string;
    password: string;
    loginResponse: string;
  }

  const details: registrationValue = {
    email: email,
    password: password,
    loginResponse: (error = "Invalid details"),
  };

  useEffect(() => {
    document.title = "Lanza | Registration";
  }, []);

  let register = async (e: any) => {
    e.preventDefault();
    await axios
      .post(baseURL, {
        email: details.email,
        password: details.password,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Response: Successful. \nToken: " + response.data.token);
          setError("");
          setShowError("d-none");
        } else {
          setShowError("d-block");
          setError(details.loginResponse);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <Container fluid className="loginPage">
      <Row className="justify-content-center vh-100 align-items-center">
        <Col lg={4}>
          <form onSubmit={register}>
            <div className="login-container">
              <div className="login-header text-medium">Register</div>
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
                  className="mb-0"
                />
                <br />
                <label className={showError + " text-red"}>{error}</label>
                <Button
                  type="submit"
                  className="btn login-btn text-white text-medium mt-3"
                >
                  Register
                </Button>
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
