
import { useSelector,useDispatch } from "react-redux"
function EmployeeUsingRedux(){
    const dispatch = useDispatch();
    const employeeState = useSelector((state)=>state.employeeData)
    return(
        <div>
            <h1>Empoloyee using redux</h1>
            {employeeState.employees.map((emp)=>{
                return(
                    <ul>
                        <li>{emp.id} {emp.name} {emp.age} {emp.email}</li>
                    </ul>
                )
            })}
        </div>
    )

}
export default EmployeeUsingRedux