import { useState } from "react"

function CompanyForm(){
    const [fname,setFname] = useState("")
    const [age,setAge] = useState("")
    const [submitted,setSubmitted] = useState(false)

    const changeFname = (e)=>{
        console.log(e.target.value)
        setFname(e.target.value)
    }

    const changeAge = (e)=>{
        setAge(e.target.value)
    }

    const saveData = ()=>{
        setSubmitted(true)

    }
    return(
        <div>
            <h1> Register form</h1>
            <label>Fname</label>
            <input type="text" value={fname} onChange={(e)=>changeFname(e)}/>
            <label>age</label>
            <input type="text" value={age} onChange={(e)=>changeAge(e)}/>
            <button onClick={()=>saveData()}>Save</button>
            {submitted && <div>
            <h1>form info</h1>
            <h2>Name: {fname}</h2>
            <h2>Age: {age}</h2>
            </div>}
           
        </div>
    )
}

export default CompanyForm