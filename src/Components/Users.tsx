import { useState, useEffect} from "react";
import { Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import Nav from "./Navigation/Nav";

const baseURL = "https://reqres.in/api/users?page=2";

export default function Users() {
    const [users, setUsers] = useState<any>([]);

    async function listUsers() {
        await axios
          .get(baseURL)
          .then((response) => {
            if (response.status === 200) {
              setUsers(response.data.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }

      useEffect(() => {
        document.title = "Lanza | Users";
        listUsers();
      }, []);
    

    return (
      <Container fluid>
      <Row>
        <Col lg={3} sm={4} xs={4}>
         <Nav />
        </Col>
        <Col lg={9}>
        <div className="define-scroll-container">
        {users.length <= 0 ? (
          <label className="text-red">User not found</label>
        ) : (
          <>
            <table className="w-100"><tbody>
              {users.map((item: any, index: any) => {
                return (
                  <tr className="table-content border-b-color" key={index}>
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
            </tbody></table>
          </>
        )}
      </div>
      </Col>
      </Row>
      </Container>
    )
}