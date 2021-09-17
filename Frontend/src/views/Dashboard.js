import React, { useEffect,useState } from "react";
import ChartistGraph from "react-chartist";
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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import {getEmployee,getEmployees,getSalaryByEmployeeIdt,getEmployeeByType,getEmployeeByRole,getSalary,deleteEmployee,getLeaves,getEmployeeByEmail,getLeavesByEmployeeId,getAttendanceByEmployeeId,getSalaryByEmployeeId} from '../services/employee-gql';
//[((engineer.length/totaltype)*100).toString(), ((contract.length/totaltype)*100).toString(), ((manager.length/totaltype)*100).toString(),((support.length/totaltype)*100).toString()],

function Dashboard() {
  const [emp, setemp] = useState([]);
  const [lab, setlab] = useState([]);
  const [engineer, setengineer] = useState([{}]);
  const [contract, setcontract] = useState([{}]);
  const [manager, setmanager] = useState([{}]);
  const [support, setsupport] = useState([{}]);
  const [admin, setadmin] = useState([{}]);
  const [normal, setnormal] = useState([{}]);
  const [totalrole, settotalrole] = useState([{}]);
  //const [totaltype, settotaltype] = useState([{}]);
  const [sal, setsal] = useState([]);
  const[count,render]=useState(0);


  useEffect( async () => {
    const emp1 = await getEmployees();
    //getsal();
    setemp(emp1)
    console.log("emp",emp)

    getnum();
    getlab();
    render(count+1);
}, []
)

let getlab = async () => {
  let labels1 = [];
  for (let k=0;k<emp.length;k++)
  {
      labels1.push(emp[k].name)
  }
  setlab(labels1)
  console.log(lab)
}

let getnum = async () => {
const eng = await getEmployeeByType("engineer");
setengineer(eng)
console.log("eng",engineer,eng.length)
const con = await getEmployeeByType("contract");
setcontract(con)
const man = await getEmployeeByType("manager");
setmanager(man)
const sup = await getEmployeeByType("support");
setsupport(sup)
//settotaltype(engineer.length+contract.length+manager.length+support.length);
//console.log("num",eng,totaltype/engineer.length);
const adm = await getEmployeeByRole("admin");
setadmin(adm)
const nrml = await getEmployeeByRole("normal");
setnormal(nrml)
settotalrole(adm.length+nrml.length);
getsal();
}

let getsal = async () => {
let array1 = new Array(emp.length).fill(0);
console.log("array1",array1)
for (let i=0;i<emp.length;i++){
  console.log(emp)
  console.log(emp[i],emp[i].id)
  let sal = await getSalaryByEmployeeIdt((emp[i].id).toString());
  console.log("each sal",sal)
  let cnt = 0;
  for (let j=0;j<sal.length;j++){
    cnt=cnt+1;
    array1[i] = array1[i] + sal[j].total 
  }
  array1[i] = array1[i]/cnt

}
console.log("array1",array1);
setsal(array1)
console.log("sal ra",sal)
}


  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Employees</p>
                      <Card.Title as="h4"> {emp.length} </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                
               
              </Card.Footer>
            </Card>
          </Col>
      </Row>
      <Row>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Employee Role Statistics</Card.Title>
                <p className="card-category">Role</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                     
                      labels: [((admin.length/totalrole)*100).toString()+"%", ((normal.length/totalrole)*100).toString()+"%"],
                      
                        series: [((admin.length/totalrole)*100), ((normal.length/totalrole)*100)],


                      //series: [engineer, contract, manager, support],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  admin <i className="fas fa-circle text-danger"></i>
                  normal 
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Employee Type Statistics</Card.Title>
                <p className="card-category">Type</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                     
                      labels: [((engineer.length/emp.length)*100).toString()+"%", ((contract.length/emp.length)*100).toString()+"%", ((manager.length/emp.length)*100).toString()+"%",((support.length/emp.length)*100).toString()+"%"],
                      
                        series: [((engineer.length/emp.length)*100), ((contract.length/emp.length)*100), ((manager.length/emp.length)*100),((support.length/emp.length)*100)],


                      //series: [engineer, contract, manager, support],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  engineer <i className="fas fa-circle text-danger"></i>
                  contract <i className="fas fa-circle text-warning"></i>
                  manager <i className="fas fa-circle text-primary"></i>
                  support
                </div>
               
              </Card.Body>
            </Card>
          </Col>

          
        </Row>




        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Average Salary of Employee</Card.Title>
                <p className="card-category">Monthly salary</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: lab,
                      series: [
                        sal,
                       
                      ],
                    }}
                    type="Bar"
                    options={{
                      high:75000,
                      seriesBarDistance: 10,
                      axisX: {
                        showGrid: false,
                      },
                      axisY: {
                        offset: 60,},
                      height: "300px"
                      
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
                      
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Average salaries of Employees
               
                </div>
               
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;