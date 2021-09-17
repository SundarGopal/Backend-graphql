//const { createApolloFetch } = require('apollo-fetch');
import { gql,request, GraphQLClient } from 'graphql-request'

const endpoint = 'http://localhost:4000/graphql'

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: 'Bearer MY_TOKEN',
  },
})


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

var customers = [
	{id:1, name:'Vivek', email:'vivek@gmail.com', phone:'112233', address:'ahmedabad'},
	{id:2, name:'Rama', email:'vivek@gmail.com', phone:'112233', address:'ahmedabad'},
	{id:3, name:'Krishna', email:'vivek@gmail.com', phone:'112233', address:'ahmedabad'},
	{id:4, name:'Rahim', email:'vivek@gmail.com', phone:'112233', address:'ahmedabad'}
];

export var getCustomers = async function(){
    const query = gql`
    {
        customers { id,name,email,phone,address,dob }
    }
  `
  let  response = await graphQLClient.request(query)
  console.log(JSON.stringify(response, undefined, 2))
  return response.customers;
  
    /*let response = await fetch({
        query: '{ customers { id,name,email,phone,address }}',
      })
    //let result = await response.json();
    return response.data.customers;*/
  }




export var getCustomersBySearch = function(field,text){
	let searchCustomers=[];
	for (var i = 0;i < customers.length; i++) {
		if(customers[i][field].startsWith(text)){
			searchCustomers.push(customers[i]);
		}
	}
	return searchCustomers;
}


export var getCustomerById = async function (CustomerId) {
    const query1 = gql`
    {
        customer(id:`+ CustomerId + `){
            id,email,name,phone,address,dob
        }
    }
  `
    console.log(query1)
   
    let response = await graphQLClient.request(query1)
    console.log('cus')
    console.log(JSON.stringify(response, undefined, 2))

    return response.customer;
}



export var addCustomer = async(Customer) => {
    console.log(Customer)
    
    const mutation1 = gql`
    mutation ($name: String!
        $email: String!
        $phone: String!
        $address: String!
        $dob: Date! ) {
        addCustomer(name: $name, phone:$phone,email:$email,address:$address,dob:$dob ) {
        name
        phone
        email
        address
        dob
      }
    }
  `
  let variables = {
    name: Customer.name,
    phone:Customer.phone,
    email:Customer.email,
    address:Customer.address,
    dob:Customer.dob
  } 

  let  response = await graphQLClient.request(mutation1,variables)
  console.log("success")
  console.log(JSON.stringify(response, undefined, 2))
    return response.Customers;
}


export var deleteCustomer = async function(id){
	const mutation5 = gql`
    mutation{
        deleteCustomer(id:`+ id + `){
          id
        }
      }
  `

  let  response = await graphQLClient.request(mutation5)
  console.log("deleted")
  
}


export var updateCustomer = function(Customer){
    console.log(Customer)
    const mutation4 = gql`
    mutation{
        updateCustomer(id:`+ Customer.id + `,name:"` + Customer.name + `",email:"` + Customer.email + `",phone:"` + Customer.phone + `",address:"` + Customer.address + `",dob:"` + Customer.dob + `"){
          id,name,email,phone,address,dob
        }
      }
  `

  let  response = graphQLClient.request(mutation4)
  console.log("success")
  console.log(JSON.stringify(response, undefined, 2))
    return response.Customers;
}

