import React, { useEffect, useState } from 'react';
import {getEmployee,getEmployees,getSalary,getLeaves,deleteLeaves,getEmployeeByEmail,getLeavesByEmployeeId,getAttendanceByEmployeeId,getSalaryByEmployeeId} from '../services/employee-gql'
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


function LeaveList() {

  const [state, setState] = useState({
        items: [], name: '', email: '', address: '', phone: '', id: 0, bLabel: 'Add'
    });
    const params = useParams();
    const emp_id = params.id;
    useEffect(() => {
        reloadCustomer(emp_id);
    },[]);
    
const history = useHistory();

  let dodelete =(id)=>{
    console.log("id is",id);
   deleteLeaves(id);
   reloadCustomer(emp_id);
   history.push("/admin/leave/"+emp_id);

  }
    let reloadCustomer = async (id) => {
        let records = await getLeavesByEmployeeId(id); 
        let records1 = await getAttendanceByEmployeeId(id);// getemployees
        //let records1 = await getSalary();
        console.log("attendance records are:", records1);
        setState({ ...state, items: records });
    }

    return (
        <div>
            <h3>Employee Leave</h3>
            <Button variant="contained" color="primary" onClick={() => {
                history.push("/admin/addleave/"+params.id);
            }}>Add Leave</Button><br /><br />
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
                <Card.Title as="h4">Leaves Table</Card.Title>
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
                      <th className="border-0">StartDate</th>
                      <th className="border-0">EndDate</th>
                      <th className="border-0">Count</th>
                      <th className="border-0">Year</th>
                      <th className="border-0">Delete Leave</th>
                      
                       
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.employeeId}</td>
                            <td>{item.startDate}</td>
                            <td>{item.endDate}</td>
                            <td>{item.count}</td>
                            <td>{item.year}</td>
                            <td><Button variant="contained" color="primary" onClick={() => {dodelete(item.id)}}>Delete</Button></td>

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


export default LeaveList;
