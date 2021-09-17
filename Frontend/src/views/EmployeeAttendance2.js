import React, { useEffect, useState } from 'react';
import {getEmployee,getEmployees,getSalary,getLeaves,getEmployeeByEmail,getLeavesByEmployeeId,getAttendanceByEmployeeId,getSalaryByEmployeeId} from '../services/employee-gql'
import { useHistory, useParams } from 'react-router-dom'
import { getEmployeeDeails } from "../services/UserSession";
import { Link } from 'react-router-dom'

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";


function AttendanceList() {
    const [records,setRecord]=useState([])
    const employee=getEmployeeDeails()
    useEffect(() => {
        const id =employee.id ;
        reloadAtt(id);
    },[]);
    
let reloadAtt = async (id) => {
    let recordsss = await getAttendanceByEmployeeId(id);
    setRecord(recordsss)
    console.log(records) }
    
    return (
        <div>
            <CustomerList items={records}
                />
        </div>
    );

  }
  function CustomerList({ items}) {
    return (
      <>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4">Attendance Table</Card.Title>
                  <p className="card-category">
                    All employees with actions
                  </p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped" class="table table-striped">
                  <thead>
                      <tr>
                        <th className="border-0">ID</th>
                        <th className="border-0">EmployeeId</th>
                        <th className="border-0">Date</th>
                        <th className="border-0">inTimeDate</th>
                        <th className="border-0">OutTime</th>
                        <th className="border-0">totalHours</th>
                        
                         
                      </tr>
                  </thead>
                  <tbody>
                      {items.map(item => (
                          <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.employeeId}</td>
                              <td>{item.date.substring(0,10)}</td>
                              <td>{item.inTimeDate}</td>
                              <td>{item.outTime}</td>
                              <td>{item.totalHours}</td>
  
                          </tr>
                      ))}
                  </tbody>
              </Table>
  
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
  
  
  export default AttendanceList;
