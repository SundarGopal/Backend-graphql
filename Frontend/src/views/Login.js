import React,{useState} from 'react';
import {getEmployeeByEmail,signIn} from '../services/employee-gql'
import ReactDOM from "react-dom";
import {EmployeeDetails,clearEmployeeDetails,TokenStore} from "../services/UserSession"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Container from '@material-ui/core/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/animate.min.css";
import "../assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "../assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import EmployeeLayout from "layouts/Employee";
import AdminLayout from "layouts/Admin";
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import UserCtx from './UserContext'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));



function Login(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
      const classes = useStyles();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState("");
      const [showPassword, setShowPassword] = useState(false);
      const handleClickShowPassword = () => setShowPassword(!showPassword);
      const handleMouseDownPassword = () => setShowPassword(!showPassword);
      
      var handleChange = (e) =>{
         if(e.target.name === "email"){
            setEmail(e.target.value);
         }else if(e.target.name === "password"){
            setPassword(e.target.value);
         }
        
      }
      //SIGN IN FUNCTION FOR TOKEN
      var sign = async(email,role)=>{
        var token=await signIn(email,role)
        console.log("token normal",JSON.stringify(token.signIn[0].id))
        TokenStore(JSON.stringify(token.signIn[0].id));
      }

      var funct=async(username,role)=>{                               //NOT REQUIRED
        console.log("here comes our emaillll",username)
        let employee1= await getEmployeeByEmail(username)
        let emp=employee1[0]
        if (emp!==[]){
          console.log("emp:   ",emp)
          func(emp,role)}
        
     }

      var func= (emp,role)=>{
         
        if (emp!==undefined)
        {
            console.log("enter")
            console.log(emp)
            console.log("role:",role)
            console.log("employee.role:",emp.role)
            console.log("name:",emp.name)
            console.log("password:",password)
            if (role==="admin" && role===emp.role && emp.name===password){
               
               sign(emp.email,"admin")      //GETTING TOKEN
               
               clearEmployeeDetails()
               EmployeeDetails(emp)
                console.log("in func Admin")
                ReactDOM.render(
                  <BrowserRouter>
                        <UserCtx.Provider
        value={{
          isLoggedIn,
          doLogin: code =>
            code ? setIsLoggedIn(true) : setIsLoggedIn(false)
        }}
      >
                    <Switch>
                      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                      <Redirect from="/" to="/admin/dashboard" />
                    </Switch>
                    </UserCtx.Provider>
                  </BrowserRouter>,
                  document.getElementById("root")
                );
            }
            else if(role==="normal"&& role===emp.role && emp.name===password){
             
              sign(emp.email,"normal") // FOR NORMAL

               clearEmployeeDetails()
               EmployeeDetails(emp)
                console.log("in func employee")
                ReactDOM.render(
                  <BrowserRouter>
                    <Switch>
                      <Route path="/employee" render={(props) => <EmployeeLayout {...props} />} />
                   <Redirect from="/" to={"/employee/Employee-Profile"}/>
                    </Switch>
                  </BrowserRouter>,
                  document.getElementById("root")
                );
            }
            else{
                alert("password is wrong "+emp.name)
            }
        }
        else{
            alert("details are wrong")
        }}
      return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
            <form className={classes.form} noValidate>

               <TextField
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />

               <TextField
             onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            InputProps={{ // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

               <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{funct(email,"admin")}}
          >
            Admin
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{funct(email,"normal")}}
          >
            Employee
          </Button>
            </form>
         </div>
         </Container>
      );
   }
    export default Login;