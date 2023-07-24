import UseContextHookDemo from "./UseContextHookDemo";
import UseEffectHookDemo from "./UseEffectHookDemo";
import UseMemoHook from "./UseMemoHook";
import UseReducerHookDemo from "./UseReducerHookDemo";
import UseStateHookDemo from "./UseStateHookDemo";

function Hooks(){
    return(
        <div>
            <h1>all hooks demo</h1>
            {/* <UseStateHookDemo/> */}
            {/* <UseEffectHookDemo/> */}
            {/* <UseContextHookDemo/> */}
           {/* <UseReducerHookDemo/> */}
           <UseMemoHook/>
        </div>
    )
}

export default Hooks