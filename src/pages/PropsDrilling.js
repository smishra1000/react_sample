 function Parent(){
    return (
        <div>
            <h1> hello parent</h1>
            <Child1 age="80" money="100"/>
        </div>
    )
 }

 export default Parent


 function Child1(props){
    return(
        <div>
            <h1>hello child1 {props.age}</h1>
            <Child2 age={props.age} money={props.money}/>
        </div>
    )
 }

 function Child2(props){
    return(
        <div>
            <h1>hello child2 {props.age}</h1>
            <Child3 age={props.age} money={props.money}/>
        </div>
    )
 }

 function Child3(props){
    return(
        <div>
            <h1>hello child3 {props.age}</h1>
            <h1>money recieved from parent {props.money}</h1>
        </div>
    )
 }

//  componnets ,types of components , state props, hooks,routing , curd operation 