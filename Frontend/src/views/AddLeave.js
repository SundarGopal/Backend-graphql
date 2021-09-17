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
import {getEmployee,addEmployee,addLeaves,addSalarygetEmployees,getSalary,getLeaves,getEmployeeByEmail,getLeavesByEmployeeId,getAttendanceByEmployeeId,getSalaryByEmployeeId, addSalary} from '../services/employee-gql';

import moment from 'moment';
import Button from '@material-ui/core/Button';

export default function AddLeave() {
    const params = useParams();
    const emp_id = params.id;
    console.log("emp_id params",typeof(emp_id));
    const [state, setState] = useState({
        items: [], employeeId:emp_id,startDate:'',endDate:'',count:'',year:'',id: 0,
    });
    
 
    useEffect(() => {
       
    }, [])
    const history = useHistory();

    let handleCancel = () => {
        setState({
            ...state,
            employeeId:emp_id,
            startDate:'',
            endDate:'',
            count:'',
            year:'',
            id: 0,
        })
    }
    let handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(state.year)
        if (!state.year.length) {
            return;
        }
        const newItem = {
            employeeId: state.employeeId,
            startDate: state.startDate,
            endDate: state.endDate,
            count:state.count,
            year:state.year,
            id: state.id
        };
        console.log(newItem)
        if (state.id === 0) { //add 
            let d = newItem.startDate 
            console.log(d)
            let date = moment(d,'YYYY-MM-DD');
            console.log(date)
            let v = date.toISOString(true).split('+')[0] + 'Z';
            newItem.startDate  = v;
    
            let e = newItem.endDate 
            console.log(e)
            let date1 = moment(e,'YYYY-MM-DD');
            console.log(date1)
            let u = date1.toISOString(true).split('+')[0] + 'Z';
            newItem.endDate  = u;
            addLeaves(newItem);

        } else { //update

        

        }
        history.push("/admin/leave/"+emp_id);

    }
    return (
        <div >
     

            <h3>Add Leave</h3>
            <div style={{width: '495px' ,color:"grey" }}>
            <input className="form-control" type = "text" 
            onFocus={(e) => (e.currentTarget.type = "date")}
            onBlur={(e) => (e.currentTarget.type = "text")}
            name="startDate" placeholder="StartDate"
                onChange={handleChange}
                value={state.startDate}
            /> <br /><br />
            <input className="form-control" type = "text" 
            onFocus={(e) => (e.currentTarget.type = "date")}
            onBlur={(e) => (e.currentTarget.type = "text")}
            name="endDate" placeholder="endDate"
                onChange={handleChange}
                value={state.endDate}
            /> <br /><br />
            <input className="form-control" name="count" placeholder="Count"
                onChange={handleChange}
                value={state.count}
            /> <br /><br />
           
             <input className="form-control" name="year" placeholder="Year"
                onChange={handleChange}
                value={state.year}
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