import {useState} from "react"

function UseStateHookDemo(){

    const [count,setCount] = useState(0)
    const [data,setData] = useState({name:"sameer mishra",email:"sameer_mishra@epam"})

    console.log(useState(0))

    const increment = ()=>{
        setCount(count+1)
    }

    const changeInfo = ()=>{
        setData({name:"sameerupdated",email:"sameerupdated@epam"})
    }
    return(
        <div>
            <h1>Count : {count}</h1>
            <h1>My Info {data.name} {data.email}</h1>
            <button onClick={()=>increment()}>Increment</button>
            <button onClick={()=>changeInfo()}>chnage info</button>
        </div>
    )
}

export default UseStateHookDemo