import { useEffect, useState } from "react"
function UseEffectHookDemo(){

    const [count,setCount] = useState(0)
    const [age,setAge] = useState(10)
    // there are 3 version of use effect

    useEffect(()=>{
        console.log("hello i am 1st version of useeffect i'll call on each render")

    })

    //2nd version of useEffect 

    useEffect(()=>{
        console.log("i am 2nd version i'll call on very first render")
    },[])

    // third version of useEffect

    useEffect(()=>{
        console.log("hello i am third version of use effect i'll call whenever my dependency chnaged")
    },[count])

    const increment = ()=>{
        setCount(count+1)
    }

    const incrementAge = ()=>{
        setAge(age+1)
    }
    return(
        <div>
            <h1>Use effect hook demo</h1>
            <h1>Count {count}</h1>
            <h4>Age: {age}</h4>
            <button onClick={()=>increment()}>Update count</button>
            <button onClick={()=>incrementAge()}>Increment Age</button>
        </div>
    )
}

export default UseEffectHookDemo