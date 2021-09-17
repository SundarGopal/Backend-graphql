import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
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
import {  useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import {getEmployee,addEmployee,addSalarygetEmployees,getSalary,getLeaves,getEmployeeByEmail,getLeavesByEmployeeId,getAttendanceByEmployeeId,getSalaryByEmployeeId, addSalary} from '../services/employee-gql';
import Button from '@material-ui/core/Button';
import moment from 'moment';


export default function AddSal() {
    const params = useParams();
    const emp_id = params.id;
    console.log("emp_id params",typeof(emp_id));
    const [state, setState] = useState({
        items: [], employeeId:emp_id,monthYear:'',basic:'',hra:'',lta:'',variable:'',bonus:'',TDS:'',tax:'',total:'',workingDaysInMonth:'',id: 0,
    });
    
 
    useEffect(() => {
       
    }, [])
    const history = useHistory();

    let handleCancel = () => {
        setState({
            ...state,
            employeeId:emp_id,
            monthYear:'',
            basic:'',
            hra:'',
            lta:'',
            variable:'',
            bonus:'',
            TDS:'',
            tax:'',
            total:'',
            workingDaysInMonth:'',
            id: 0,
        })
    }
    let handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(state.basic)
        if (!state.basic.length) {
            return;
        }
        const newItem = {
            employeeId: state.employeeId,
            monthYear: state.monthYear,
            basic: state.basic,
            hra:state.hra,
            lta:state.lta,
            variable:state.variable,
            bonus:state.bonus,
            TDS:state.TDS,
            tax:state.tax,
            total:state.total,
            workingDaysInMonth:state.workingDaysInMonth,
            id: state.id
        };
        console.log(newItem)
        console.log("basic",typeof(newItem.basic))
        console.log("eid",typeof(newItem.employeeId))
        console.log("id",typeof(newItem.id))
        console.log("year",typeof(newItem.monthYear))
            
        addSalary(newItem);
        history.push("/admin/salary/"+emp_id);

    }
    //type='number' step="0.1"
    return (
        <div >
     

            <h3>Add Salary</h3>
            <div style={{width: '495px' ,color:"grey" }}>
            <input className="form-control"  name="monthYear" placeholder="Month Year"
                onChange={handleChange}
                value={state.monthYear}
            /> <br /><br />
            

            <input className="form-control" name="basic" placeholder="Basic"
                onChange={handleChange}
                value={state.basic}
            /> <br /><br />
            <input className="form-control" name="hra" placeholder="HRA"
                onChange={handleChange}
                value={state.hra}
            /> <br /><br />
           
             <input className="form-control" name="lta" placeholder="LTA"
                onChange={handleChange}
                value={state.lta}
            /> <br /><br />
             <input className="form-control" name="variable" placeholder="Variable"
                onChange={handleChange}
                value={state.variable}
            /> <br /><br />
             <input className="form-control" name="bonus" placeholder="Bonus"
                onChange={handleChange}
                value={state.bonus}
            /> <br /><br />
            
            <input className="form-control" name="TDS" placeholder="TDS"
                onChange={handleChange}
                value={state.TDS}
            /> <br /><br />
            <input className="form-control"  name="tax" placeholder="Tax"
                onChange={handleChange}
                value={state.tax}
            /> <br /><br />
            
            <input className="form-control" name="total" placeholder="Total" 
                onChange={handleChange}
                value={state.total}
            /> <br /><br />
            <input className="form-control" name="workingDaysInMonth" placeholder="Monthly Working days"
                onChange={handleChange}
                value={state.workingDaysInMonth}
            /> <br /><br />
            </div>

            

            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Add
            </Button> &nbsp;&nbsp;
            <Button variant="contained" color="primary" onClick={handleCancel}>
                Cancel
            </Button> &nbsp;&nbsp;

            <hr />
        </div>
    );
}