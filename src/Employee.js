import { useState } from "react"
function Employee(){
    const [name,setName] = useState("sameer");
    console.log(useState("sameer"))
    const [address,setAddress] = useState("hyd")

    const [email,setEmail] = useState("test@gmail.com")
    const changeData = ()=>{
        setName("sameerUpdated")
        setAddress("blr")
        setEmail("test100@gmail.com")
    }
    return(
        <div>
            <h1>Emp Name: {name}</h1>
            <h1>Emp Address: {address}</h1>
            <h1>email: {email}</h1>
            <button onClick={()=>changeData()}>Change Data</button>
        </div>
    )
}
export default Employee


// // function useState(){
// //     retrun [value1,value2]
// // }

// // array destructuring---
// const [fname,lname] = ["sameer","mishra"]

// let user = {
//     name:"sameer",
//     age:20
// }

// const {name,age} = user