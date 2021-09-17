var salaries=[
    {id:"1111111",employeeId:"1",monthYear:"07-2020",basic:"50000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-08-2020",dateOfModify:"09-09-2020"},
    {id:"1111112",employeeId:"2",monthYear:"07-2020",basic:"40000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-08-2020",dateOfModify:"09-09-2020"},
    {id:"1111113",employeeId:"3",monthYear:"07-2020",basic:"30000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-08-2020",dateOfModify:"09-09-2020"},
    {id:"1111114",employeeId:"4",monthYear:"07-2020",basic:"60000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-08-2020",dateOfModify:"09-09-2020"},
    {id:"1111115",employeeId:"5",monthYear:"07-2020",basic:"70000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-08-2020",dateOfModify:"09-09-2020"},
    {id:"1111116",employeeId:"6",monthYear:"07-2020",basic:"80000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-08-2020",dateOfModify:"09-09-2020"},
    {id:"1111117",employeeId:"7",monthYear:"07-2020",basic:"50000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-08-2020",dateOfModify:"09-09-2020"},
    {id:"1111118",employeeId:"8",monthYear:"07-2020",basic:"60000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-08-2020",dateOfModify:"09-09-2020"},
    {id:"1111119",employeeId:"9",monthYear:"07-2020",basic:"70000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-08-2020",dateOfModify:"09-09-2020"},
    {id:"1111120",employeeId:"10",monthYear:"07-2020",basic:"90000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-08-2020",dateOfModify:"09-09-2020"},
    {id:"1111121",employeeId:"1",monthYear:"08-2020",basic:"50000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-09-2020",dateOfModify:"09-10-2020"},
    {id:"1111122",employeeId:"2",monthYear:"08-2020",basic:"40000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-09-2020",dateOfModify:"09-10-2020"},
    {id:"1111123",employeeId:"3",monthYear:"08-2020",basic:"30000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-09-2020",dateOfModify:"09-10-2020"},
    {id:"1111124",employeeId:"4",monthYear:"08-2020",basic:"60000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-09-2020",dateOfModify:"09-10-2020"},
    {id:"1111125",employeeId:"5",monthYear:"08-2020",basic:"70000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-09-2020",dateOfModify:"09-10-2020"},
    {id:"1111126",employeeId:"6",monthYear:"08-2020",basic:"80000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-09-2020",dateOfModify:"09-10-2020"},
    {id:"1111127",employeeId:"7",monthYear:"08-2020",basic:"50000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-09-2020",dateOfModify:"09-10-2020"},
    {id:"1111128",employeeId:"8",monthYear:"08-2020",basic:"60000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-09-2020",dateOfModify:"09-10-2020"},
    {id:"1111129",employeeId:"9",monthYear:"08-2020",basic:"70000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-09-2020",dateOfModify:"09-10-2020"},
    {id:"1111130",employeeId:"10",monthYear:"08-2020",basic:"90000",hra:"2342",lta:"3423",bonus:"5000",TDS:"56",tax:"1400",total:"232344",workingDayaInMonth:"22",DateOfEntry:"08-09-2020",dateOfModify:"09-10-2020"},
    ]
    
    //saving to local storage
    var saveLocalStorage = () =>{
        localStorage.setItem('salaries',JSON.stringify(salaries));
    }
    if(localStorage.getItem('salaries') === null){
        saveLocalStorage();
    }else{
        salaries = JSON.parse(localStorage.getItem('salaries'));
        console.log(salaries)
    }
    
    //adding a new record to salaries
    export var addEmployeeSalary=(att)=>{
        salaries.push(att);
        saveLocalStorage();
    }
    
    //get salary records of employee
    export var getSalaryRecords=(employeeId)=>{
        let list=salaries.filter((item)=>{item.employeeId===employeeId})
        return list
    }
    
    //get salary by month and year
    export var getSalaryRecordByMonthYear=(employeeId,monthYear)=>{
        let list=salaries.filter((item)=>{item.employeeId===employeeId && item.monthYear===monthYear})
        return list
    }
    
    //delete one record of employee salary
    export var deleteSalaryRecord=(employeeId,monthYear)=>{
        salaries=salaries.filter((item)=>{item.employeeId!==employeeId && item.monthYear!==monthYear})
        saveLocalStorage();
    }
    
    //delete all records of employee salary
    export var deleteEmployeeSalary=(employeeId)=>{
        salaries=salaries.filter((item)=>{item.employeeId!==employeeId})
        saveLocalStorage()
    }
    
    
    //delete record by record id
    export var deleteSalaryById=(id)=>{
        salaries=salaries.filter((item)=>{item.id!==id})
        saveLocalStorage()
    }