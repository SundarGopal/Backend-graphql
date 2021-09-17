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
import {getEmployee,addEmployee,addAttendace,addLeaves,addSalarygetEmployees,getSalary,getLeaves,getEmployeeByEmail,getLeavesByEmployeeId,getAttendanceByEmployeeId,getSalaryByEmployeeId, addSalary} from '../services/employee-gql';
import Button from '@material-ui/core/Button';

import moment from 'moment';


export default function AddAtt() {
    const params = useParams();
    const emp_id = params.id;
    console.log("emp_id params",typeof(emp_id));
    const [state, setState] = useState({
        items: [], employeeId:emp_id,date:'',inTimeDate:'',outTime:'',totalHours:'',id: 0,
    });
    
 
    useEffect(() => {
       
    }, [])
    const history = useHistory();

    let handleCancel = () => {
        setState({
            ...state,
            employeeId:emp_id,
            date:'',
            inTimeDate:'',
            outTime:'',
            totalHours:'',
            id: 0,
        })
    }
    let handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(state.totalHours)
        if (!state.totalHours.length) {
            return;
        }
        const newItem = {
            employeeId: state.employeeId,
            date: state.date,
            inTimeDate: state.inTimeDate,
            outTime:state.outTime,
            totalHours:state.totalHours,
            id: state.id
        };
        console.log(newItem)
        //if (state.id === 0) { //add 
            let d = newItem.date
            console.log(d)
            let date1 = moment(d,'YYYY-MM-DD');
            console.log(date1)
            let v = date1.toISOString(true).split('+')[0] + 'Z';
            newItem.date  = v;
            addAttendace(newItem);
            history.push("/admin/attendance/"+emp_id);
            

        //}

    }
    return (
        <div >
     

            <h3>Add Attendance</h3>
            <div style={{width: '495px' ,color:"grey" }}>
            <input className="form-control" type = "text" 
                onFocus={(e) => (e.currentTarget.type = "date")}
                onBlur={(e) => (e.currentTarget.type = "text")}
                name="date" placeholder="Date"
                onChange={handleChange}
                value={state.date}
            /> <br /><br />
            <input className="form-control"  name="inTimeDate" placeholder="inTimeDate"
                onChange={handleChange}
                value={state.inTimeDate}
            /> <br /><br />
            <input className="form-control" name="outTime" placeholder="outTime"
                onChange={handleChange}
                value={state.outTime}
            /> <br /><br />
           
             <input className="form-control" name="totalHours" placeholder="totalHours"
                onChange={handleChange}
                value={state.totalHours}
            /> <br /><br />
            </div>
            <Button  variant="contained" color="primary" onClick={handleSubmit}>
                Add
            </Button> &nbsp;&nbsp;
            <Button  variant="contained" color="primary" onClick={handleCancel}>
               Cancel
            </Button> &nbsp;&nbsp;

            <hr />
        </div>
    );
}