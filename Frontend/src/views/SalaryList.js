    import Select from 'react-select'
    import React, { Component } from 'react'
    import { useEffect, useState } from 'react';
    import 'bootstrap/dist/css/bootstrap.css';
    import { useHistory, useParams } from 'react-router'
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

    import {getEmployee,getEmployees,getSalary,getSalarymonths,getSalaryByMonthYear,getLeaves,getEmployeeByEmail,getLeavesByEmployeeId,getAttendanceByEmployeeId,getSalaryByEmployeeId} from '../services/employee-gql';
    import Button from '@material-ui/core/Button';
    
    export default function SalaryList  () {

        const params = useParams();
        const [selected, setSelected] = useState([]);
        const [data, setData] = useState([]);
        const [options, setOptions] = useState([]);

        

        
        const history = useHistory();

        useEffect(async () => {
            reloadoptions();
        }, []);


        let reloadoptions = async () => {
            var records = await getSalarymonths()  // will get all the month years form database
            var array1 = []
            for (var i = 0; i < records.length; i++) {
            
                    array1.push({ label: records[i].monthYear, value: records[i].monthYear })
                
            
            }
            setOptions(array1)
            console.log("options",options)

        }
    

        
    let handleSubmit =  async () => { //add async later
        console.log(selected.label)
        var data1 = await getSalaryByMonthYear(selected.label)  // gets the data of emp_id, name , total salary
        setData(data1)
        console.log(data)

    }







        return (
            <div>
                <div style={{width: '195px' ,color:"grey" }}>
        <Select
        options={options}
        value={selected}
        onChange={setSelected}
        />
        <br></br>
        <Button variant="contained" color="primary" onClick={handleSubmit} >
        Show salaries
        </Button> &nbsp;&nbsp;
        </div>
        
    <br></br>
    <p className="card-category">
                        
                    </p>
                    <hr></hr>
    <SalaryList1 items={data}
                    />

    </div>
        )

    }

    function SalaryList1({ items }) {
        return (
        <>
            <Container fluid>
            <Row>
                <Col md="12">
                <Card className="strpied-tabled-with-hover">
                    <Card.Header>
                    <Card.Title as="h4">Salary List</Card.Title>
                    <p className="card-category">
                        Salaries of all employess in a month
                    </p>
                    </Card.Header>
                    <Card.Body className="table-full-width table-responsive px-0">
                    <Table className="table-hover table-striped" class="table table-striped">
                    <thead>
                        <tr>
                        <th className="border-0">Id</th>
                        <th className="border-0">Month Year</th>
                        <th className="border-0">Basic</th>
                        <th className="border-0">Variable</th>
                        <th className="border-0">bonus</th>
                        <th className="border-0">TAX</th>
                        <th className="border-0">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                    <td>{item.employeeId}</td>
                                <td>{item.monthYear}</td>
                                <td>{item.basic}</td>
                                <td>{item.variable}</td>
                                <td>{item.bonus}</td>
                                <td>{item.tax}</td>
                                <td>{item.total}</td>
    
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
    