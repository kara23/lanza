import { useState, useEffect} from "react";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";
import Nav from "./Navigation/Nav";
const baseURL = "https://reqres.in/api/unknown";

export default function Resources() {
    const [resources, setResources] = useState<any>([]);

    async function listResources() {
        await axios
          .get(baseURL)
          .then((response) => {
            if (response.status === 200) {
              setResources(response.data.data);
              // console.log(response.status);
              // return response.data.data;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
      useEffect(() => {
        document.title = "Lanza | Resources";
        listResources();
      }, []);

    return (
      <Container fluid>
      <Row>
        <Col lg={3} sm={4} xs={4}>
         <Nav />
        </Col>
        <Col lg={9}>
        <div className="define-scroll-container">
        {resources.length <= 0 ? (
          <label className="text-red">Resources not found</label>
        ) : (
          <>
            <table className="w-100"><tbody>
              {resources.map((item: any, index: any) => {
                return (
                  <tr className="w-100 border-b-color" key={index}>
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
            </tbody></table>
          </>
        )}
      </div>
      </Col>
      </Row>
      </Container>
    )
}