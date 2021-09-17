import React, { useEffect, useState } from "react";

// react-bootstrap components
import {
  Badge,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import { getEmployeeDeails,UpdateDetails } from "../services/UserSession";
import {getEmployee,addEmployee,updateEmployee,getEmployees,getSalary,getLeaves,getEmployeeByEmail,getLeavesByEmployeeId,getAttendanceByEmployeeId,getSalaryByEmployeeId} from '../services/employee-gql';
import { useHistory } from 'react-router-dom'

function User() {
  const [state, setState] = useState({
    items: [], name: '', email: '', address:'',dateOfBirth:'',dateOfJoining:'',education:'',type:'',role:'',password:'', id: 0
});
const history = useHistory();


useEffect(()=>{
  let adm = getEmployeeDeails();
  console.log("admin details in use effect",adm);
  if(typeof (adm.name) !== 'undefined'){
    setState({...adm})
    console.log("state in use effect",state);
  } 
  
},[])
let handleChange = (e) => {
  console.log("state in handlechange",state);
  setState({ ...state, [e.target.name]: e.target.value });
  console.log("state in HC",state.address);
}
let handleSubmit = async (e) => {
  e.preventDefault();
        console.log(state.name)
        if (!state.name.length) {
            return;
        }
        const newItem = {
          name: state.name,
          email: state.email,
          address: state.address,
          dateOfBirth:state.dateOfBirth,
          dateOfJoining:state.dateOfJoining,
          education:state.education,
          type:state.type,
          role:state.role,
          password:'normal',
          id: state.id
      };
      console.log("update profile is",newItem)
      UpdateDetails(newItem)
      updateEmployee(newItem);
      history.push("/admin/Employee-Profile")
        
        

        }
        //history.push("/admin/user")


  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Employee Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Company (disabled)</label>
                        <Form.Control
                          defaultValue="Yara International"
                          disabled
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
  
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Form.Control
                        name = "email"
                        onChange={handleChange}
                        value={state.email}
                        disabled
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="2">
                      <Form.Group>
                        <label>Id(disabled)</label>
                        <Form.Control
                           name = "id"
                          value={state.id}
                          disabled
                          placeholder="Id"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Name</label>
                        <Form.Control
                           name = "name"
                          onChange={handleChange}
                          value={state.name}
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Address</label>
                        <Form.Control
                           name = "address"
                          onChange={handleChange}
                          value={state.address}
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    
                  </Row>
                  

                  <Row>
                  <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Role</label>
                        <Form.Control
                           name = "role"
                          onChange={handleChange}
                          value={state.role}
                          disabled
                          placeholder="Role"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Type</label>
                        <Form.Control
                         name = "type"
                        onChange={handleChange}
                          value={state.type}
                          disabled
                          placeholder="Type"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Date of Joining</label>
                        <Form.Control
                         name = "dateOfJoining"
                        onChange={handleChange}
                          value={state.dateOfJoining.substring(0,10)}
                          disabled
                          placeholder="DOJ"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Education</label>
                        <Form.Control
                          name="education"
                          onChange={handleChange}
                          value={state.education}
                          placeholder="Education"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>DOB</label>
                        <Form.Control
                        name="dateOfBirth"
                        onChange={handleChange}
                          value={state.dateOfBirth.substring(0,10)}
                          placeholder="DOB"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Password</label>
                        <Form.Control
                        name="password"
                        onChange={handleChange}
                        value={state.password}
                        disabled
                          placeholder="Password"
                          type="password"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    
                    
                  </Row>
                 
                  <Button
                    variant="contained" color="primary"
                    type="submit"
                    //variant="info"
                    onClick={handleSubmit}
                  >
                    Update Profile
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>


          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                      .default
                  }
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg").default}
                    ></img>
                    <h5 className="title">{state.name}</h5>
                  </a>
                  <p className="description">{state.email}</p>
                </div>
                <p className="description text-center">
                  "I am employee of Yara "<br></br>
                 
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default User;
