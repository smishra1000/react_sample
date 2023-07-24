const { useState,useMemo } = require("react");

function UseMemoHook(){
    const [age,setAge] = useState(10)
    const [count,setCount] = useState(0)
    const tranName = useMemo(()=>transformName(),[age]);
    // const tranNamewithoutMemo = transformName();
    const changeAge = ()=>{
        setAge(age+1)
    }
    const changeCount = ()=>{
        setCount(count+1)
    }

    function transformName(){
        // this function taking long time to perform calculation
        console.log("transform my name")
    }

    return(
        <div>
            <h1>Use memo hook demo</h1>
            <h1>{tranName}</h1>
            {/* <h1>{tranNamewithoutMemo}</h1> */}
            <h1>age: {age}</h1>
            <h1>count: {count}</h1>
            <button onClick={()=>changeAge()}>Change Age</button>
            <button onClick={()=>changeCount()}>Change Count</button>
        </div>
    )
}


export default UseMemoHook