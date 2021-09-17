var apiEndPoint = "https://nodeapi.pyther.com/customer";
//const apiEndPoint = "http://localhost:4000/api/customer/";
// GET https://nodeapi.pyther.com/customer  fetch RECORDS
// POST https://nodeapi.pyther.com/customer ADD RECORD
// PUT https://nodeapi.pyther.com/customer UPDATE RECORD
// DELETE https://nodeapi.pyther.com/customer DELETE RECORD

var customers =[
    {id:1,name:"Vivek Singhwal",email:"vivek@pyther.com", phone:"5433233232", address:"Bengaluru"},
    {id:2,name:"Sipeeka",email:"sipeeka@pyther.com", phone:"6644564544", address:"Ahmedabad"}
  ];

var saveLocalStorage = () =>{
    localStorage.setItem('customers',JSON.stringify(customers));
}

export var getCustomers = () =>{
    return fetch(apiEndPoint, {
    			method: 'get',
	    			headers: {
	    			'Content-Type': 'application/json;charset=utf-8'
	  				}
  			  })
          	.then(response => response.json())
          	.then(response => {
               // console.log(JSON.stringify(response));
                return response;
            }).catch(function(error) {
              console.log(error);
          });
}

export var addCustomer = (customer)=>{
    return fetch(apiEndPoint, {
        method: 'post',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
            body:JSON.stringify(customer)
        })
      .then(response => response.json())
      .then(response => {
        console.log(JSON.stringify(response));
        return response;
    }).catch(function(error) {
      console.log(error);
  });
}

export var deleteCustomer = ({id}) =>{
    return fetch(apiEndPoint, {
        method: 'delete',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
            body:JSON.stringify({id})
        })
      .then(response => response.json())
      .then(response => {
        console.log(JSON.stringify(response));
        return response;
    }).catch(function(error) {
      console.log(error);
  });
  }

export var getCustomerById = (id) =>{
    return fetch(apiEndPoint+"/"+id, {
        method: 'get',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              }
        })
      .then(response => response.json())
      .then(response => {
        console.log(JSON.stringify(response));
        return response;
    }).catch(function(error) {
      console.log(error);
  });
}

export var updateCustomer = (customer) =>{
    return fetch(apiEndPoint, {
        method: 'put',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              },
            body:JSON.stringify(customer)
        })
      .then(response => response.json())
      .then(response => {
        console.log(JSON.stringify(response));
        return response;
    }).catch(function(error) {
      console.log(error);
  })
};
