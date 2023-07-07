import React from "react"

class Person extends React.Component{
    constructor(){
        super();
        this.state = {
            age:20,
            name:"sameer",
            email:"sameer@gmail",
            address:"hyd"
        }
    }
    changeName = ()=>{
        this.state.name="rahul"

        //console.log(this.state.name)
        this.setState({name:"sameerupdated",address:"blr"})
    }
    render(){
        return(
            <div>
                <h1>Name: {this.state.name}</h1>
                <h1>address : {this.state.address}</h1>
                <button onClick={()=>this.changeName()}>Change Name</button>
            </div>
        )
    }

}

export default Person
