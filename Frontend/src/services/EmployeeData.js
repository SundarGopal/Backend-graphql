/*let customers = [
	{id:'1',name:'Vivek',email:'vivek@gmail.com',address:'Ahmedabad', phone:'9724232340'},
	{id:'2',name:'Samridh',email:'samdrih@gmail.com',address:'Bengaluru', phone:'9724237840'},
	{id:'3',name:'Mahi',email:'Mahi@pyther.com',address:'Delhi', phone:'9728937840'}
]; 

export const getCustomers = function(customer){
	return customers;
}

export const getCustomerById = function(id){	
	let customer = {}
	for (var i = 0; i < customers.length; i++) {
		if(id == customers[i].id){
			return customers[i];
		}
	}
	return customer;
}

export const addCustomer = function(customer){	
	customer.id = Math.round(Math.random(289)*1000000)+'';
	customers.push(customer);
}

export const updateCustomer = function(customer){
	for (var i = 0; i < customers.length; i++) {
		if(customer.id == customers[i].id){
			customers[i] = customer;
			return;
		}
	}
}

export const getCustomersBySearch = function(field,text){
	text = text.toLowerCase();
	var tempCustomers = []
	for (var i = 0; i < customers.length; i++){
		if(customers[i][field].toLowerCase().startsWith(text)){
			tempCustomers.push(customers[i]);
		}
	}
	return tempCustomers;
}
export const deleteCustomer = function({id}){ //{id:7}
	var tempCustomers = [];
	for (var i = 0; i < customers.length; i++) {
		if(id != customers[i].id){
			tempCustomers.push(customers[i]);
		}
	}
	customers = tempCustomers;
}
*/

var customers =[
    {id:1,name:"Vivek Singhwal",email:"vivek@pyther.com", phone:"5433233232", address:"Bengaluru"},
    {id:2,name:"Sipeeka",email:"sipeeka@pyther.com", phone:"6644564544", address:"Ahmedabad"}
  ];

var saveLocalStorage = () =>{
    localStorage.setItem('customers',JSON.stringify(customers));
}
    if(localStorage.getItem('customers') == null){
        saveLocalStorage();
    }else{
        customers = JSON.parse(localStorage.getItem('customers'));
    }

export var getCustomers = ()=>{
    return customers;
}

export var addCustomer = (customer)=>{
    customers.push(customer);
    saveLocalStorage();
}

export var deleteCustomer = (id) =>{
    customers = customers.filter((item)=>(item.id!=id));
    saveLocalStorage();
  }

export var getCustomerById = (id) =>{
    var list = customers.filter((item)=>(item.id==id));
    if(list.length > 0){
        return list[0];
    }else{
        return {}
   }
}

export var updateCustomer = (customer) =>{
    var list = customers.filter((item)=>(item.id==customer.id));
    if(list.length > 0){
         list[0].name = customer.name;
         list[0].email = customer.email;
         list[0].phone = customer.phone;
         list[0].address = customer.address;
    }
    saveLocalStorage();
}
