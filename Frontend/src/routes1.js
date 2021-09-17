
import Dashboard from "views/Dashboard.js";
import Leaves from "views/EmployeeLeaves"
import User from "views/EmployeeProfile"
import Attendance from "views/EmployeeAttendance2";
import EmployeeSalaryE from "views/EmployeeSalaryE";
import Icons from "views/Icons.js";
import login from "views/Login"



const dashboardRoutes = [


  /*{
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/employee",
  },
  /*{
    path: "/salary/:id",
    name: "Salary",
    icon: "nc-icon nc-chart-pie-35",
    component: CustomerList,
    layout: "/employee",
  },*/
  {
    path: "/Employee-Profile",
    name: "Employee Profile",
    icon: "nc-icon nc-circle-09",
    component: User,
    layout: "/employee",
  },

  {
    path: "/salary",
    name: "Salary",
    icon: "nc-icon nc-money-coins",
    component: EmployeeSalaryE,
    layout: "/employee",
  },
 
  {
    path: "/Leaves",
    name: "Leaves",
    icon: "nc-icon nc-album-2",
    component: Leaves,
    layout: "/employee",
  },

  {
    path: "/Attendance",
    name: "Attendance",
    icon: "nc-icon nc-notes",
    component: Attendance,
    layout: "/employee",
  },
  
 /* {
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
