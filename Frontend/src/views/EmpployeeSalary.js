import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router'
import { useHistory } from 'react-router'
import jsPDF from "jspdf";
import 'jspdf-autotable'
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

  import {getEmployee,getEmployees,deleteSalary,getEmployeeByID,getSalary,getLeaves,getEmployeeByEmail,getLeavesByEmployeeId,getAttendanceByEmployeeId,getSalaryByEmployeeId} from '../services/employee-gql';


export default function CustomerAppF() {
    
    const[salary,setsalary] = useState([]);
    const[name,setname]=useState('');
    const[sal,setsal] = useState([]);
    const params = useParams();
    const emp_id = params.id;
    const history = useHistory();
    useEffect(() => {
        
        reloadSal(emp_id);
    },[]);

    let reloadSal =  async (emp_id) => {
      //const id = params.id;
      let records =  await getSalaryByEmployeeId(emp_id); 
      let records1 = await getEmployeeByID(emp_id);
      console.log("name is",records1[0].name);
      setname(records1[0].name); 
      //console.log("records",records)
      //console.log("records1",records[0]);
      //console.log("type",typeof(records[0].basic))
      setsalary(records)
      console.log("salary defined",salary)
  }
   
     let generate_pdf = (item)=>{

      var doc = new jsPDF("p","pt","a4");
      
      doc.text(240,20,"Yara International")
      
      doc.text(260,40,"Salary-Slip")
      
      doc.autoTable({ html: '#my-table' })
      
      doc.autoTable({
      
      head: [['Fields', 'Data']],
      
      body: [
      
      ['Employee name',name],
      
      ['employee id',item.employeeId],
      
      ['salary month-year',item.monthYear],
      
      ['Working daya in a month',item.workingDaysInMonth],
      
      ['Basic',item.basic],
      
      ['LTA',item.lta],
      
      ['HRA',item.hra],
      
      ['Variable',item.variable],
      
      ['Bonus',item.bonus],
      
      ['TDS',item.TDS],
      
      ['Tax',item.tax],
      
      ['Total',item.total],
      
      ],
      
      })
      
      doc.save("payslip.pdf")
      
      }

     let dodelete =(id)=>{
       console.log("id is",id);
      deleteSalary(id)
      reloadSal(emp_id)
      history.push("/admin/salary/"+emp_id);

     }

    
    
    
   
    return (
        <div>
    
            <h3>Employee Salary</h3>
            <Button variant="contained" color="primary" onClick={() => {
                history.push("/admin/addsalary/"+params.id);
            }}>Add Salary</Button><br /><br />
            <hr></hr>

            <SalaryList items={salary}
             generate_pdf={generate_pdf}
             dodelete={dodelete}        
                />
        </div>
    );
}
function SalaryList({ items,generate_pdf,dodelete }) {
      return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Employee Salary</Card.Title>
                <p className="card-category">
                  Salary with all components 
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped" class="table table-striped">
                <thead>
                    <tr>
              
                      <th className="border-0">EmployeeId</th>
                      <th className="border-0">Month Year</th>
                      <th className="border-0">Basic</th>
                      <th className="border-0">LTA</th>
                      <th className="border-0">Hra</th>
                      <th className="border-0">Variable</th>
                      <th className="border-0">bonus</th>
                      <th className="border-0">TDS</th>
                      <th className="border-0">TAX</th>
                      <th className="border-0">Total</th>
                      <th className="border-0">Salaryslip</th>
                      <th className="border-0">Delete</th>
                     
                     
                       
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.employeeId}>
                             <td>{item.employeeId}</td>
                             <td>{item.monthYear}</td>
                            <td>{item.basic}</td>
                            <td>{item.lta}</td>
                            <td>{item.hra}</td>
                            <td>{item.variable}</td>
                            <td>{item.bonus}</td>
                            <td>{item.TDS}</td>
                            <td>{item.tax}</td>
                            <td>{item.total}</td>
                            <td><Button variant="contained" color="primary" onClick={() => {generate_pdf(item)}}>Salaryslip</Button></td>
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
