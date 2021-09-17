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


function LeaveList() {
    const [records,setRecords]=useState([])
 
    const employee=getEmployeeDeails()
    useEffect(() => {
        const id =employee.id ;
        reloadCustomer(id);
    },[]);
    
    let reloadCustomer = async (id) => {
       let recordsss = await getLeavesByEmployeeId(id); 
            setRecords(recordsss)}
  
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
                      
                       
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.employeeId}</td>
                            <td>{item.startDate.substring(0,10)}</td>
                            <td>{item.endDate.substring(0,10)}</td>
                            <td>{item.count}</td>
                            <td>{item.year}</td>

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















/*import React, { useEffect, useState } from 'react';
import { getLeavesById } from '../services/LeavesData';
import { getEmployeeDeails } from "../services/UserSession";


export default function Leaves() {
    const [state, setState] = useState({
        items: [], name: '', email: '', address: '', phone: '', id: 0, bLabel: 'Add'
    });

    const employee=getEmployeeDeails()
    console.log("employee:",employee);
    console.log(employee.id)


    const Leaves=getLeavesById(employee.id)
    console.log(Leaves)
    if (Leaves===null){
        return(
            <div>
                <h1>Leaves of employee</h1>
                <h2>No Leaves</h2>
            </div>
        )
    
    }
    else{
    return (
        <div>
            <LeavesList Leaves={Leaves}/>
        </div>
    );}
}
//    {id:1,employeeId:4,startDate:'2021-08-01',endDate:'2021-08-02',count:2,year:2021,dateOfEntry:'2021-07-30',dateOfModify:'2021-07-30'},

function LeavesList({  Leaves }) {
    return (
        <div>
            <h1>Leaves of employee</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>LeaveId</th>
                        <th>employeeId</th>
                        <th>startDate</th>
                        <th>endDate</th>
                        <th>count</th>
                        <th>year</th>
                        <th>dateOfEntry</th>
                        <th>dateOfModify</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {Leaves.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.employeeId}</td>
                            <td>{item.startDate}</td>
                            <td>{item.endDate}</td>
                            <td>{item.count}</td>
                            <td>{item.year}</td>
                            <td>{item.dateOfEntry}</td>
                            <td>{item.dateOfModify}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}*/