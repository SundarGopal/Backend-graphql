//const { createApolloFetch } = require('apollo-fetch');
import { gql,request, GraphQLClient } from 'graphql-request'

import { useToken } from './UserSession' //TOKEN

const endpoint = 'http://localhost:4000/graphql'

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
})
/*headers: {
  authorization: null,
},*/
// Bearer MY_TOKEN
/*const fetch = createApolloFetch({
	uri: 'http://localhost:4000/graphql',
	headers: {
		"authorization":"rama"
	  },
  });

  fetch.use(({ request, options }, next) => {
	options.headers = {
	  "authorization": "rama"
	};
	next();
  });

var model ={}; */
export var signIn = async function(email,password){
  const query = gql`
  {
    signIn(email:"`+email+`",password:"`+password+`"){
      id
    }
  }
`
let  response = await graphQLClient.request(query)
//console.log(JSON.stringify(response, undefined, 2))
console.log(response.id);
return response;

}

export var getEmployees = async function(){
    const query = gql`
    {
      employee{
        id,
       name,
       email,
       address,
       dateOfBirth,
       dateOfJoining,
       education,
       type,
       role      
         }
    }
  `
  let  response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query)
  console.log(JSON.stringify(response, undefined, 2))
  return response.employee;
  
  }

  export var getEmployee = async function(){
    const query = gql`
    {
      employee{
        id
       name,
       email     
         }
    }
  `
  let  response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query)
  console.log(JSON.stringify(response, undefined, 2))
  return response.employee;
  
  }

  export var getEmployeeByEmail = async function(email){
    const query = gql`
    {
      employee(email:"`+email+`"){
        id,
        name,
        email,
        address,
        dateOfBirth,
        dateOfJoining,
        education,
        type,
        role,
        password 
         }
    }
  `
  let  response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query)
  console.log(JSON.stringify(response, undefined, 2))
  return response.employee;
  
  }

  export var getEmployeeByType = async function(type){
    const query = gql`
    {
        employee(type:"`+type+`"){
      name
    }
  
  }
  `
  let  response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query)
  console.log(JSON.stringify(response, undefined, 2))
  return response.employee;
  
  }

  export var getEmployeeByID = async function(id){
    const query = gql`
    {
        employee(id:"`+id+`"){
      name
    }
  
  }
  `
  let  response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query)
  console.log(JSON.stringify(response, undefined, 2))
  return response.employee;
  
  }

  export var getEmployeeByRole = async function(role){
    const query = gql`
    {
        employee(role:"`+role+`"){
      name
    }
  
  }
  `
  let  response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query)
  console.log(JSON.stringify(response, undefined, 2))
  return response.employee;
  
  }

  
  
  export const addEmployee = async(record) => {
    const query = 'mutation { addEmployee(name:"'+ record.name+
    '",email:"'+record.email+
    '",address:"'+record.address+
    '",dateOfBirth:"'+record.dateOfBirth +
    '",dateOfJoining:"'+record.dateOfJoining +
    '",education:"'+record.education+
    '",type:"'+record.type+
    '",role:"'+record.role+
    '",password:"'+record.password+'"){id}}';
    const response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query);
      return response;
  }


  export const deleteEmployee = async(id) => {
    const query = 'mutation { deleteEmployee('+
    'id:"'+ id+
    '"){id}}';
    console.log("query::",query);
    const response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query);
      return response;
  }


  export const updateEmployee = async (record) => {
    console.log("updateRecord:",record)
    const query = 'mutation { updateEmployee('+
    'id:"'+ record.id+
    '"name:"'+ record.name+
    '",email:"'+record.email+
    '",address:"'+record.address+
    '",dateOfBirth:"'+record.dateOfBirth+
    '",dateOfJoining:"'+record.dateOfJoining+
    '",education:"'+record.education+
    '",type:"'+record.type+
    '",role:"'+record.role+
    '",password:"'+record.password+
    '"){id}}';
    const response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query);
    console.log("response in updategql",response);
      return response;
  }

  //salaries

  export var getSalary = async function(){
    const query1 = gql
    `{
      salaries{
           id,
           employeeId,
           monthYear,
           basic,
           hra,
           lta,
           variable,
           bonus,
           TDS,
           tax,
           total,
           workingDaysInMonth
       
       
         }}
  `

  console.log("came to sal")
  let  response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query1)
  console.log(JSON.stringify(response, undefined, 2))
  return response.salaries;
  
  }

  export var getSalarymonths = async function(){
    const query1 = gql
    `{
      salaries{
           monthYear
         }}
  `

  console.log("came to salaries")
  let  response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query1)
  console.log(JSON.stringify(response, undefined, 2))
  return response.salaries;
  
  }

  export var getSalaryByEmployeeId = async function(employeeId){
    const query = gql
    `{
      salaries(employeeId:`+employeeId+`){
          id,
           employeeId,
           monthYear,
           basic,
           hra,
           lta,
           variable,
           bonus,
           TDS,
           tax,
           total,
           workingDaysInMonth
       
       
         }}
  `
  let  response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query)
  console.log(JSON.stringify(response, undefined, 2))
  return response.salaries;
  
  }

  export var getSalaryByMonthYear = async function(monthYear){
      console.log("entered",monthYear)
    const query = gql
    `{
      salaries(monthYear:"`+monthYear+`"){
          variable,
          monthYear,
          bonus,
          tax,
          basic,
           employeeId,
           total
         }}
         
  `
  let  response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query)
  console.log(response,"resp")
  console.log(JSON.stringify(response, undefined, 2))
  return response.salaries;
  /*
  const query2 = gql
  `{
    employee(employeeId:`+response.salaries.employeeId+`{
        name
       }}
`
let  response2 = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query2)
response.salaries.name = response2.employee.name
  console.log(JSON.stringify(response, undefined, 2)) */
  
  }

  
  /*export const addSalary = async(record) => {
    console.log("In add salary")
    const query = 'mutation { addSalary(employeeId:"'+record.employeeId+
    '",monthYear:"'+record.monthYear+
    '",basic:"'+record.basic +
    '",hra:"'+record.hra +
    '",lta:"'+record.lta+
    '",variable:"'+record.variable+
    '",bonus:"'+record.bonus+
    '",TDS:"'+record.TDS+
    '",tax:"'+record.tax+
    '",workingDaysInMonth:"'+record.workingDaysInMonth+'",){id}}';
    const response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query);
      return response;
  }*/

  export const addSalary = async(record) => {
    console.log("In add salary ")
    const query = 'mutation { addSalary(employeeId:'+ record.employeeId+
    ',monthYear:"'+record.monthYear+
    '",basic:'+record.basic+
    ',hra:'+record.hra +
    ',lta:'+record.lta +
    ',variable:'+record.variable+
    ',bonus:'+record.bonus+
    ',TDS:'+record.TDS+
    ',tax:'+record.tax+
    ',total:'+record.total+
    ',workingDaysInMonth:'+record.workingDaysInMonth+'){id}}';
    const response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query);
      return response;
  }
  export const deleteSalary = async(id) => {
    const query = 'mutation { deleteSalary('+
    'id:"'+ id+
    '"){id}}';
    console.log("query::",query);
    const response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query);
      return response;
  }

  export const updateSalary = async (record) => {
    console.log("updateRecord:",record)
    const query = 'mutation { updateSalary(employeeId:"'+record.employeeId+
    '",monthYear:"'+record.monthYear+
    '",basic:"'+record.basic +
    '",hra:"'+record.hra +
    '",lta:"'+record.lta+
    '",variable:"'+record.variable+
    '",bonus:"'+record.bonus+
    '",TDS:"'+record.TDS+
    '",tax:"'+record.tax+
    '",workingDaysInMonth:"'+record.workingDaysInMonth+'"){id}}';
    const response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query);
    console.log(response);
      return response;
  }
    
  

  
//========================= LEAVES ================
  export var getLeaves = async function(){
  
  const query ='{ leaves{id,employeeId,startDate,endDate,count,year,dateOfEntry,dateOfModify}}';
	const response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query);
  return response.leaves;
  }

  export var getLeavesByEmployeeId = async function(employeeId){
  
    const query ='{ leaves(employeeId:'+employeeId+'){id,employeeId,startDate,endDate,count,year,dateOfEntry,dateOfModify}}';
    const response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query);
    return response.leaves;
    }
  
  export var addLeaves = async function(record) {

    //console.log("record",record);
    
    const query = 'mutation{ addLeave(employeeId:'+record.employeeId + 
    ',startDate:"'+record.startDate + '",endDate:"'+ record.endDate + 
    '",count:'+ record.count + ',year:"'+record.year+'"){id}}'
       
    console.log("query:"+query);
    const response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query);
    console.log("response:",response);
      return response; 
    
  }
  
  
  export var deleteLeaves = async function(id) {

  console.log(id)
	const query = 'mutation { deleteLeave(id:'+id+"){id}}"
	const response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query);
	console.log("response:",response);
  return response;
  }
  
  
  export var updateLeaves = async function(record) {

    const query = 'mutation{ updateLeave(id:'+record.id+',employeeId:'+record.employeeId + 
    ',startDate:'+record.startDate + ',endDate:'+ record.endDate + 
    ',count:'+ record.count + ',year:'+record.year+'){id}}'
       
    console.log("query:"+query);
    const response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query);
    console.log("response:",response);
    return response; 

  }


//========================= LEAVES END ======================= 
 



//==================ATTENDANCE========================

export var getAttendance = async function(){
  const query = gql`
  {
    attendances {
      id,
      employeeId,
      date,
      inTimeDate,
      outTime,
      totalHours
    }
  }
`
let  response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query)
console.log(JSON.stringify(response, undefined, 2))
return response.attendances;

}

export var getAttendanceByEmployeeId = async function(employeeId){
  const query = gql`
  {
    attendances(employeeId:`+employeeId+`){
      id,
      employeeId,
      date,
      inTimeDate,
      outTime,
      totalHours
    }
  }
`
let  response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query)
console.log(JSON.stringify(response, undefined, 2))
return response.attendances;

}


/*export var addAttendace = async(record) => {
    console.log(record)
    
    const mutation = gql`mutation { addAttendance 
      (employeeId:`+ record.employeeId+
    `,date:"`+record.date+
    `",inTimeDate:"`+record.inTimeDate +
    `",outTime:"`+record.outTime +
    `",totalHours:`+record.totalHours+
    `){id}}"`;
    const response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(mutation);
      return response;
}*/

export var addAttendace = async function(record) {

  //console.log("record",record);
  
  const query = 'mutation{addAttendance(employeeId:'+record.employeeId + 
  ',date:"'+record.date + '",inTimeDate:"'+ record.inTimeDate + 
  '",outTime:"'+ record.outTime + '",totalHours:'+record.totalHours+'){id}}'
     
  console.log("query:"+query);
  const response = await new GraphQLClient(endpoint, {
  headers: {
    authorization: useToken(),
  }
}).request(query);
  console.log("response:",response);
    return response; 
  
}
export const updateAttendance = async (record) => {
  console.log("updateRecord:",record)
  const mutation = gql`mutation { updateAttendance 
  (employeeId:"`+ record.employeeId+
  `",email:"`+record.email+
  `",date:"`+record.date+
  `",inTimeDate:"`+record.inTimeDate +
  `",outTime:"`+record.outTime +
  `",totalHours:"`+record.totalHours+
  `"){id}}"`;
  const response = await new GraphQLClient(endpoint, {
    headers: {
      authorization: useToken(),
    }
  }).request(mutation);
    return response;
}
export var deleteAttendance = async function(id) {

  console.log(id)
	const query = 'mutation { deleteAttendance(id:'+id+"){id}}"
	const response = await new GraphQLClient(endpoint, {
    headers: {
      authorization: useToken(),
    }
  }).request(query);
	console.log("response:",response);
  return response;
  }

/*export var deleteAttendance = async function(id){
	const mutation = gql`
    mutation{
        deleteAttendance(id:`+ id + `){
          id
        }
      }
  `

  let  response = await graphQLClient.request(mutation)
  console.log("deleted")
  return response
  
}*/

//==============ATTENDANCE END================