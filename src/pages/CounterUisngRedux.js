import { useSelector,useDispatch } from "react-redux"
function CounterUsingRedux(){
    const state = useSelector((state)=>state.counterData)
    const dispatch = useDispatch();

    const increment = ()=>{
        dispatch({type:"increment"})
    }
    const decrement = ()=>{
        dispatch({type:"decrement"})
    }
    const reset = ()=>{
        dispatch({type:"reset"})
    }

    return(
        <div className="container">
            <h1>counter example using redux</h1>
            <h1>Count is : {state.count}</h1>
            <button onClick={()=>increment()}>Increment</button>
            <button onClick={()=>decrement()}>Decrement</button>
            <button onClick={()=>reset()}>Reset</button>
            
        </div>
    )
}

export default CounterUsingRedux