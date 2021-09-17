import Select from 'react-select'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {getEmployee,getEmployees,getSalary,deleteEmployee,getLeaves,getEmployeeByEmail,getLeavesByEmployeeId,getAttendanceByEmployeeId,getSalaryByEmployeeId} from '../services/employee-gql';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom'
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
import LeaveList from './EmployeeLeaves';
import Button from '@material-ui/core/Button';

const options = [{ label: "name", value: "name" },
{ label: "email", value: "email" }]

function TableList() {

  const [state, setState] = useState({
        items: [], name: '', email: '', address: '', phone: '',text:'', id: 0, bLabel: 'Add'
    });

    useEffect(() => {
        reloadEmployee();

    },[]);

const history = useHistory();

let handleChange1 = (e) => {
  setState({ ...state, [e.target.name]: e.target.value });
}
  const[selected,setSelected] = useState('')

  const handleClick = (path) => {
    history.push(path);
    console.log(path)
  }
    
    let reloadEmployee = async () => {
        let records = await getEmployee();
        
        setState({ ...state, items: records });
    }

    let doDelete = (id) => {
        console.log("delete comp id:" + id);
        deleteEmployee( id )
        reloadEmployee();
        history.push("/admin/table")
    };

    let doSearch = async () => {
      var searchText = state.text
      

      if (searchText == "") {
        let records = await getEmployee();
        setState({ ...state, items: records });

      } else {
        //var selectField = $("#select").val();
        let records1 = await getEmployee();
        let array1 = []
        if(selected.label!==undefined){
          for (let j=0;j<records1.length;j++){
         
            if (((records1[j][selected.label]).toLowerCase()).startsWith((searchText).toLowerCase())){
               array1.push(records1[j])
            }
          }
            setState({ ...state, items: array1 });

        }
        else{
        alert("select a value from dropdown box to find the employee")
        }
        }
      
      }
    return (
        <div>
           <div > 
        <TextField
                onChange={handleChange1}
                variant="outlined"
                margin="normal"
                name="text"
                label="name/email"
                value={state.text}
                color="secondary"
          />
            <br /><br />
        <div style={{width: '195px' ,color:"grey" }}>
        <Select 
                options={options}
                value={selected}
                onChange={setSelected}
          /></div>
            </div>
           <text> </text>
           <br></br>
            <Button variant="contained" color="primary" onClick={() => {doSearch()}}>Find Employee</Button>

            <br /><br />

            <Button variant="contained" color="primary" onClick={() => {
                history.push("/admin/addemployee");
            }}>Add Employee</Button><br /><br />
            <hr></hr>
            <CustomerList items={state.items}
               doDelete={doDelete}
                handleClick={handleClick}
                />
        </div>
    );

  }
function CustomerList({ items,doDelete,handleClick }) {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Employee Table</Card.Title>
                <p className="card-category">
                  All employees with actions
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped" class="table table-striped">
                <thead>
                    <tr>
              
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Email</th>
                      <th className="border-0">Salary</th>
                      <th className="border-0">Attendance</th>
                      <th className="border-0">Leaves</th>
                      <th className="border-0">Delete</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td> <Button variant="contained" color="primary" onClick={() => handleClick("/admin/salary/"+item.id)}>Salary</Button></td>
                            <td> <Button variant="contained" color="primary"  onClick={() => handleClick("/admin/attendance/"+item.id)}>Attendance</Button></td>
                            <td><Button variant="contained" color="primary"  onClick={() => handleClick("/admin/leave/"+item.id)}>Leaves</Button></td>
                            <td><Button variant="contained" color="primary"  onClick={() => {  doDelete(item.id) }}>Delete Employee</Button></td>
                            

                             

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


export default TableList;
