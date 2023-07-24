import { useReducer } from "react"

const initialState = {
    count:0
}

function CounterReducer(state=initialState,action){
    if(action.type==="increment"){
        return {count:state.count+1}
    }else if(action.type==="decrement"){
        return {count:state.count-1}
    }else if(action.type==="reset"){
        return {count:0}
    }else {
        return state;
    }
}

function UseReducerHookDemo(){
    const [state,dispatch] = useReducer(CounterReducer,initialState)
    return(
        <div>
            <h1>use reducer hook demo</h1>
            <h1>count is : {state.count}</h1>
            <button onClick={()=>dispatch({type:"increment"})}>increment</button>
            <button  onClick={()=>dispatch({type:"decrement"})}>decrement</button>
            <button  onClick={()=>dispatch({type:"reset"})}>reset</button>
        </div>
    )
}

export default UseReducerHookDemo


// button-----command{type:"increment"}---reducer ----
// reducer will perform manipulation baed on command and it will return new state 

// action
// reducer 
// dispatch
// store