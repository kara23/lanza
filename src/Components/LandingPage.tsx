import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import { BsPeople, BsSymmetryVertical, BsPersonPlus } from "react-icons/bs";

import axios from "axios";
const baseURL = [
  "https://reqres.in/api/users?page=2",
  "https://reqres.in/api/unknown",
  "https://reqres.in/api/register",
];

// declare interface
interface loginValue {
  email: string;
  password: string;
  loginResponse: string;
}

function Dashboard() {
  const [users, setUsers] = useState<any>([]);
  const [resources, setResources] = useState<any>([]);
  const [showUsers, setShowUsers] = useState(true);
  const [showResources, setShowResources] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState("d-none");
  let [error, setError] = useState("");

  async function listUsers() {
    await axios
      .get(baseURL[0])
      .then((response) => {
        if (response.status === 200) {
          setUsers(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function listResources() {
    await axios
      .get(baseURL[1])
      .then((response) => {
        if (response.status === 200) {
          setResources(response.data.data);
          console.log(response.status);
          // return response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    listUsers();
    listResources();
  }, []);

  const details: loginValue = {
    email: email,
    password: password,
    loginResponse: (error = "Invalid login"),
  };

  let login = async (e: any) => {
    e.preventDefault();
    await axios
      .post(baseURL[2], {
        email: details.email,
        password: details.password,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Response: Successful. \nToken: " + response.data.token);
          setError("");
          setShowError("d-none");
          console.log(response.data.token);
        } else {
          setShowError("d-block");
          setError(details.loginResponse);
        }
      })
      .catch((error) => {
        setError("Error: Bad request");
        setShowError("d-block");
        console.log(error);
      });
  };

  function mapUsers() {
    return (
      <div className="define-scroll-container">
        {users.length <= 0 ? (
          <label className="text-red">User not found</label>
        ) : (
          <>
            <table className="w-100">
              {users.map((item: any, index: any) => {
                return (
                  <tr className="table-content border-b-color">
                    <td width="150">
                      <img src={item.avatar} className="rounded" />
                    </td>
                    <td>
                      {" "}
                      <span className="text-medium">Email:</span> {item.email}
                      <br />
                      <span className="text-medium">Name:</span>{" "}
                      {item.first_name} {item.last_name}
                    </td>
                  </tr>
                );
              })}
            </table>
          </>
        )}
      </div>
    );
  }

  function mapResources() {
    return (
      <div className="define-scroll-container">
        {resources.length <= 0 ? (
          <label className="text-red">User not found</label>
        ) : (
          <>
            <table className="w-100">
              {resources.map((item: any, index: any) => {
                return (
                  <tr className="w-100 border-b-color">
                    <td>
                      {" "}
                      <span className="text-medium">Name:</span> {item.name}
                      <br />
                      <span className="text-medium">Year:</span> {item.year}
                      <br />
                      <span className="text-medium">Color:</span> {item.color}
                      <br />
                      <span className="text-medium">Pantone value:</span>{" "}
                      {item.pantone_value}
                      <br />
                    </td>
                  </tr>
                );
              })}
            </table>
          </>
        )}
      </div>
    );
  }

  function mapRegister() {
    return (
      <Container>
        <Row className="justify-content-center vh-100 align-items-center">
          <Col lg={5}>
            <form onSubmit={login}>
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
  function displayUsers() {
    document.title = "Lanza | Users";
    setShowResources(false);
    setShowUsers(true);
    setShowRegister(false);
  }

  function displayResources() {
    document.title = "Lanza | Resources";
    setShowResources(true);
    setShowUsers(false);
    setShowRegister(false);
  }

  function displayRegister() {
    document.title = "Lanza | Register";
    setShowResources(false);
    setShowUsers(false);
    setShowRegister(true);
  }
  return (
    <Container fluid>
      <Row>
        <Col lg={3} sm={4} xs={4}>
          <div className="left-nav-container">
            {/* <LeftNav /> */}
            <Row className="align-items-center">
              <Col lg={6} className="pt-3">
                <Row className="justify-content-center align-items-center">
                  <Col lg={12} sm={6} xs={12}>
                    <div
                      className="icon-container text-center"
                      onClick={displayUsers}
                    >
                      <BsPeople size={20} />
                    </div>
                  </Col>
                  <Col lg={12} sm={6} xs={12}>
                    <label className="w-100 text-lg-center text-xs-center">
                      Users
                    </label>
                  </Col>
                </Row>
              </Col>

              <Col lg={6} className="pt-3">
                <Row className="justify-content-center align-items-center">
                  <Col lg={12} sm={6} xs={12}>
                    <div
                      className="icon-container text-center"
                      onClick={displayResources}
                    >
                      <BsSymmetryVertical size={20} />
                    </div>
                  </Col>
                  <Col lg={12} sm={6} xs={12}>
                    <label className="w-100 text-lg-center text-xs-center">
                      Resources
                    </label>
                  </Col>
                </Row>
              </Col>

              <Col lg={6} className="pt-3">
                <Row className="justify-content-center align-items-center">
                  <Col lg={12} sm={6} xs={12}>
                    <div
                      className="icon-container text-center"
                      onClick={displayRegister}
                    >
                      <BsPersonPlus size={20} />
                    </div>
                  </Col>
                  <Col lg={12} sm={6} xs={12}>
                    <label className="w-100 text-lg-center text-xs-center">
                      Register
                    </label>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={9} sm={8} xs={8} className="p-0">
          {showUsers && <label className="w-100"><label className="text-medium pt-2 mb-2">Users</label><br/>{mapUsers()}</label>}
          {showResources && <label className="w-100"><label className="text-medium pt-2 mb-2">Resources</label><br/>{mapResources()}</label>}
          {showRegister && <label className="w-100">{mapRegister()}</label>}
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
