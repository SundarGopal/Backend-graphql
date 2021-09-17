import React, { useEffect, useState } from 'react';
import {getEmployee,getEmployees,deleteAttendance,getSalary,getLeaves,getEmployeeByEmail,getLeavesByEmployeeId,getAttendanceByEmployeeId,getSalaryByEmployeeId} from '../services/employee-gql'
import { useHistory, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

// react-bootstrap components
import {
  Badge,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Button from '@material-ui/core/Button';

function AttendanceList() {

  const [state, setState] = useState({
        items: [], name: '', email: '', address: '', phone: '', id: 0, bLabel: 'Add'
    });
    const params = useParams();
    const emp_id = params.id;
    useEffect(() => {
        const id = params.id;
        reloadAtt(id);
    },[]);
    
const history = useHistory();
    let reloadAtt= async (id) => {
        let records = await getAttendanceByEmployeeId(id); 
        setState({ ...state, items: records });
    }
    let dodelete =(id)=>{
      console.log("id is",id);
      deleteAttendance(id);
      reloadAtt(emp_id);
     history.push("/admin/attendance/"+emp_id);
  
    }
    
    return (
        <div>
            <h3>Employee Attendance</h3>
            <Button  variant="contained" color="primary" onClick={() => {
                history.push("/admin/addattendance/"+params.id);
            }}>Add Attendance</Button><br /><br />
            <hr></hr>
            <CustomerList items={state.items}
            dodelete={dodelete}
                />
        </div>
    );

  }
function CustomerList({ items,dodelete}) {
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
                      <th className="border-0">Delete Attendance</th>
                      
                       
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.employeeId}</td>
                            <td>{item.date}</td>
                            <td>{item.inTimeDate}</td>
                            <td>{item.outTime}</td>
                            <td>{item.totalHours}</td>
                            <td><Button  variant="contained" color="primary" onClick={() => {dodelete(item.id)}}>Delete</Button></td>

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