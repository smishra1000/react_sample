
 import { useState } from "react"
function Employee(){

    const [data,setData] = useState({name:"test1",email:"test1@gmail.com"})

    const changeName = ()=>{
       setData((prevState)=>{
        return{
            ...prevState,
            name:"test1updated"
        }
       })
    }
    return(
        <div>
            <h1>name :{data.name}</h1>
            <h1>email : {data.email}</h1>
            <button onClick={()=>changeName()}>change name</button>
        </div>
    )
}

export default Employee