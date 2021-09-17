/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import CustomerList from "views/CustomerList.js";
import EmployeeSalary from "views/EmpployeeSalary";
import SalaryList from "views/SalaryList"
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import EmployeeAttendance from "views/EmployeeAttendance.js"
import AddEmp from "views/AddEmployee";
import AddSal from "views/AddSalary";
import AddLeave from "views/AddLeave";
import Addatt from "views/AddAttendance";
import Leave from "views/LeavesbyId";
//import EditEmployee from "views/EditEmployee";
const dashboardRoutes = [

/*
  {
    
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/admin",
  }, */
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  /*{
    path: "/editemployee/:email",
    name: "EditEmployee",
    icon: "nc-icon nc-chart-pie-35",
    component: EditEmployee,
    layout: "/admin",
  },*/
  {
    path: "/addsalary/:id",
    name: "Add Salary",
    icon: "nc-icon nc-chart-pie-35",
    component: AddSal,
    layout: "/admin",
  },
  {
    path: "/addleave/:id",
    name: "Add Leave",
    icon: "nc-icon nc-chart-pie-35",
    component: AddLeave,
    layout: "/admin",
  },
  {
    path: "/addattendance/:id",
    name: "Add Attendance",
    icon: "nc-icon nc-chart-pie-35",
    component: Addatt,
    layout: "/admin",
  },
  {
    path: "/addemployee",
    name: "Add Employee",
    icon: "nc-icon nc-chart-pie-35",
    component: AddEmp,
    layout: "/admin",
  },
  {
    path: "/attendance/:id",
    name: "Attendance",
    icon: "nc-icon nc-chart-pie-35",
    component: EmployeeAttendance,
    layout: "/admin",
  },
  {
    path: "/leave/:id",
    name: "Leave",
    icon: "nc-icon nc-chart-pie-35",
    component: Leave,
    layout: "/admin",
  },
  {
    path: "/salary/:id",
    name: "Salary",
    icon: "nc-icon nc-chart-pie-35",
    component: EmployeeSalary,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Admin Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Employee List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/salarylist",
    name: "Salary List",
    icon: "nc-icon nc-money-coins",
    component: SalaryList,
    layout: "/admin",
  },
  /*{
    path: "/searchbydate",
    name: "Details By Date",
    icon: "nc-icon nc-circle-09",
    component: CustomerList,
    layout: "/admin",
  },
 
   
 
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },
 
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
  },*/
/*
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  }, */
];

export default dashboardRoutes;
