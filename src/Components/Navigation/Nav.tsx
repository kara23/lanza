import {Container, Col, Row} from "react-bootstrap";
import { BsPeople, BsSymmetryVertical, BsPersonPlus } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export default function Nav() {
 
    return (
        <Container fluid>
            <Row>
                <Col>
                <div className="left-nav-container">
            <Row className="align-items-center">
              <Col lg={6} className="pt-3">
                <Row className="justify-content-center align-items-center">
                  <Col lg={12} sm={6} xs={12}>
                   <NavLink to={"/users"} className={({ isActive }) =>
              isActive ? "text-blue" : "text-black"
            }> <div
                      className="icon-container text-center"
                    >
                      <BsPeople size={20} />
                    </div></NavLink>
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
                  <NavLink to={"/resources"}   className={({ isActive }) =>
              isActive ? "text-blue" : "text-black"
            }>  <div
                      className="icon-container text-center"
                    >
                      <BsSymmetryVertical size={20} />
                    </div></NavLink>
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
                  <NavLink to={"/registration"} className="text-black">  <div
                      className="icon-container text-center"
                    >
                      <BsPersonPlus size={20} />
                    </div></NavLink>
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
            </Row>
        </Container>
    )
}