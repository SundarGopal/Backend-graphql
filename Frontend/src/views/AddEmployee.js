import React, { useEffect, useState } from 'react';
import Select from 'react-select'
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
import {getEmployee,addEmployee,getEmployees,getSalary,getLeaves,getEmployeeByEmail,getLeavesByEmployeeId,getAttendanceByEmployeeId,getSalaryByEmployeeId} from '../services/employee-gql';
import Button from '@material-ui/core/Button';
import moment from 'moment';


export default function AddEmp() {
    const [state, setState] = useState({
        items: [], name: '', email: '', address:'',dateOfBirth:'',dateOfJoining:'',education:'',type:'',role:'',password:'', id: 0, bLabel: 'Add'
    });
    const params = useParams();
    const [selected, setSelected] = useState([]);
    const [options, setOptions] = useState([]);
    const [selected1, setSelected1] = useState([]);
    const [options1, setOptions1] = useState([]);
 
    useEffect(() => {
        reloadoptions();
        reloadoptions1();
    }, [])
    const history = useHistory();

    let reloadoptions = async () => {
        var records = ['engineer','contract','manager','support']
        var array1 = []
        for (var i = 0; i < 4; i++) {
        
                array1.push({ label: records[i], value: records[i] })
            
        
        }
        setOptions(array1)
        console.log("options",options)

    }

    let reloadoptions1 = async () => {
        var records1 = ['admin','normal']
        var array11 = []
        for (var i = 0; i < 2; i++) {
        
                array11.push({ label: records1[i], value: records1[i] })
            
        
        }
        setOptions1(array11)
        console.log("options1",options1)

    }





    let handleCancel = () => {
        setState({
            ...state,
            name: '',
            email: '',
          
            address:'',dateOfBirth:'',dateOfJoining:'',education:'',type:'',role:'',password:'',

            id: 0,
            bLabel: 'Add'
        })
    }
    let handleChange = (e) => {
        //setState({ ...state, name: "Vivek" });
        setState({ ...state, [e.target.name]: e.target.value });
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(state.name)
        if (!state.name.length) {
            return;
        }
        const newItem = {
            name: state.name,
            email: state.email,
            address: state.address,
            dateOfBirth:state.dateOfBirth,
            dateOfJoining:state.dateOfJoining,
            education:state.education,
            type:selected.label,
            role:selected1.label,
            password:selected1.label,
            id: state.id
        };
        console.log(newItem)
        console.log("id",typeof(newItem.id))
        console.log("role",typeof(newItem.role))

        if (state.id === 0) { //add 
            let d = newItem.dateOfBirth 
            console.log(d)
            let date = moment(d,'YYYY-MM-DD');
            console.log(date)
            let v = date.toISOString(true).split('+')[0] + 'Z';
            newItem.dateOfBirth  = v;
    
            let e = newItem.dateOfJoining 
            console.log(e)
            let date1 = moment(e,'YYYY-MM-DD');
            console.log(date1)
            let u = date1.toISOString(true).split('+')[0] + 'Z';
            newItem.dateOfJoining  = u;
            
            addEmployee(newItem);

        } else { //update

        

        }
        history.push("/admin/table")

    }
    return (
        <div >
            <h3>Add Employee</h3>
            <br /><br />
            <div style={{width: '495px' ,color:"grey" }}>
            <input className="form-control"   name="name" placeholder="Name"
                onChange={handleChange}
                value={state.name}
            /> <br /><br />
            

            <input className="form-control" name="email" placeholder="Email"
                onChange={handleChange}
                value={state.email}
            /> <br /><br />
            <input className="form-control" name="address" placeholder="Address"
                onChange={handleChange}
                value={state.address}
            /> <br /><br />
           
             <input className="form-control" type = "text" 
                onFocus={(e) => (e.currentTarget.type = "date")}
                onBlur={(e) => (e.currentTarget.type = "text")}
                name="dateOfBirth" 
                placeholder="DateOfBirth"
                onChange={handleChange}
                value={state.dateOfBirth}
            /> <br /><br />
             <input className="form-control" type = "text" 
             onFocus={(e) => (e.currentTarget.type = "date")}
             onBlur={(e) => (e.currentTarget.type = "text")}
             name="dateOfJoining" placeholder="Date of Joining"
                onChange={handleChange}
                value={state.dateOfJoining}
            /> <br /><br />

             <input className="form-control" name="education" placeholder="Education"
                onChange={handleChange}
                value={state.education}
            /> <br /><br />
            
           {/*} <input className="form-control" name="type" placeholder="Type"
                onChange={handleChange}
                value={state.type}
    /> <br /><br />*/}
        <Select
        placeholder="Select Type.."
        options={options}
        value={selected}
        onChange={setSelected}
        />
        <br></br>
        <br></br>
        <Select
        placeholder="Select Role.."
        options={options1}
        value={selected1}
        onChange={setSelected1}
        />
        <br></br>
        <br></br>
        
            {/*<input className="form-control" name="role" placeholder="Role"
                onChange={handleChange}
                value={state.role}
/> <br /><br />*/}
            
            <input className="form-control" name="password" placeholder="Password"
                onChange={handleChange}
                value={state.password}
            /> <br /><br />
            </div>


            

            <Button variant="contained" color="primary" onClick={handleSubmit}>
                {state.bLabel}
            </Button> &nbsp;&nbsp;
            <Button variant="contained" color="primary" onClick={handleCancel}>
                Cancel
            </Button>
            <hr />
        </div>
    );
}