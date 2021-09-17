import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router'
import { getCustomers, getCustomerById, deleteCustomer, updateCustomer, addCustomer } from '../services/EmployeeData';
import { useHistory } from 'react-router'

export default function CustomerAppF() {
    const [state, setState] = useState({
        items: [], name: '', email: '', address: '', phone: '', id: 0, bLabel: 'Add'
    });
    const params = useParams();
    useEffect(() => {
        
        reloadCustomer();
    },[]);

    
    const id = params.id;
    console.log(id);

    const history = useHistory();
    let reloadCustomer = async () => {
        let records = await getCustomers();
        setState({ ...state, items: records });
    }
    let doDelete = (id) => {
        console.log("delete comp id:" + id);
        deleteCustomer( id )
        reloadCustomer();
    }
    let doEdit = (id) => {
        history.push("/customers/edit/" + id);
    }
    let getSalary = () =>
    {
        console.log("getsalary")
    }
    let getSalaryslip = () =>
    {
        console.log("getSalaryslip")
    }
    let getAttendance = () =>
    {
        console.log("getAttendance")
    }
    let getLeaves = () =>
    {
        console.log("getLeaves")
    }

    /*let handleCancel = () => {
        setState({
            ...state,
            name: '',
            email: '',
            phone: '',
            address: '',
            dob:'',
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
        if (!state.name.length) {
            return;
        }
        const newItem = {
            name: state.name,
            email: state.email,
            phone: state.phone,
            address: state.address,
            dob:state.dob,
            id: Date.now()
        };
        if (state.id !== 0) { //update
            newItem.id = state.id;
            updateCustomer(newItem);
            reloadCustomer();
            setState((prevState) => ({
                ...state,
                id: 0,
                name: '',
                email: '',
                phone: '',
                address: '',
                dob:'',
                bLabel: 'Add'
            }));
        } else { //add
            addCustomer(newItem);
            reloadCustomer();
            setState((prevState) => ({
                ...state,
                id: 0,
                name: '',
                email: '',
                phone: '',
                address: '',
                dob:'',
                bLabel: 'Add'
            }));
        }
        //this.setState({}) //object pass to setState
        //this.setState((oldState)=>{return {}}) //function pass to setState
    } */
    // <th colSpan={4}>Actions</th>
    return (
        <div>
    
            <h3>Employee List</h3>
            <button class="btn btn-primary btn-sm" onClick={() => {
               // history.push("/customers/add");
            }}>Add Employee</button><br /><br />
            <CustomerList items={state.items}
                salary={getSalary}
                Salaryslip={getSalaryslip}
                Attendance={getAttendance}
                Leaves={getLeaves}
                />
        </div>
    );
}
function CustomerList({ items, getSalary, getSalaryslip,getAttendance,getLeaves }) {
    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Salary Slip</th>
                        <th>Attendance</th>
                        <th>Leaves</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td><button class="btn btn-primary btn-sm" onClick={() => { console.log("gives salary") }}>Salary</button></td>
                            <td><button class="btn btn-primary btn-sm" onClick={() => { console.log("gives salaryslip") }}>Salaryslip</button></td>
                            <td><button class="btn btn-primary btn-sm" onClick={() => { console.log("gives attendance") }}>Attendance</button></td>
                            <td><button class="btn btn-primary btn-sm" onClick={() => { console.log("gives leaves") }}>Leaves</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
