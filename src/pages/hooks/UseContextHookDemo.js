import { createContext, useContext } from "react"
const AgeContext = createContext()

function UseContextHookDemo(){
    const age = 60
    return (
        <AgeContext.Provider value={age}>
            <div>
                <h1>hello parent</h1>
                <Child1/>
            </div>
        </AgeContext.Provider>

    )
}

function Child1() {
    return (
        <div>
            <h1>hello child1</h1>
            <Child2/>
        </div>
    )
}

function Child3(){
    const age = useContext(AgeContext)
    return(
        <div>
            <h1>age recieved from parent inside child3: {age}</h1>
        </div>
    )
}

function Child2() {
    const age = useContext(AgeContext)
    return (
        <div>
            <h1>hello child2</h1>
            <h1>age recieved from parent: {age}</h1>
            <Child3/>
        </div>
    )
}

export default UseContextHookDemo;