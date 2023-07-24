

const initialState = {
    employees:[
        {
            id:1,
            name:"test1",
            age:20,
            emial:"test1@gmail.com"
        }
    ]
}


function EmployeeReducer(state=initialState,action){
    if(action.type==="get_employee"){
        return state
    }else{
        return state
    }
   
}

export default EmployeeReducer
