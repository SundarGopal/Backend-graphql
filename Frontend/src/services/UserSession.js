var EmployeeRecord=[]

var token = ""

var saveLocalStorage = () =>{
    localStorage.setItem('EmployeeRecord',JSON.stringify(EmployeeRecord));
}
export var EmployeeDetails = (record)=>{
    EmployeeRecord.push(record);
    saveLocalStorage();
}

export const clearEmployeeDetails=()=>{
    EmployeeRecord=[];
    saveLocalStorage()
}

export var UpdateDetails =(record)=>{

    clearEmployeeDetails()
    
    EmployeeRecord.push(record);
    
    saveLocalStorage();
    
    }

export const getEmployeeDeails=()=>{
    return EmployeeRecord[0]
}

export var TokenStore = (tokenGen) =>{
    token = tokenGen
    console.log("INSIDE USER SESSION "+token)
    }
    
export var useToken = () => {
        console.log("RETURNING TOKEN " + token)
        token=token.replace(/^"(.*)"$/,'$1');
        return token;
}