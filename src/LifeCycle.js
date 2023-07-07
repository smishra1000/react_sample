import React from "react";
let id = null;

class LifeCycle extends React.Component {
    constructor(props) {
        console.log("1. constructor")
        super(props)
        this.state = {
            name: "sameer"
        }
    }

    static getDerivedStateFromProps(props) {
        console.log(props)
        console.log("2 getDerivedStateFromProps ")
        return { address: props.address }
    }

    changeName = () => {
        this.setState({ name: "sameerupdated" })
        id = setInterval(function () {
            console.log("hello interval started")
        }, 2000)
    }
    render() {
        console.log("3 render ")
        return (
            <div>
                <h1>name {this.state.name}</h1>
                <h1>Address : {this.state.address}</h1>
                <button onClick={() => this.changeName()}>change name</button>
            </div>
        )

    }


    componentDidMount() {
        console.log("4 componentDidMount ")
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState, snapshot) {
        console.log("getSnapshotBeforeUpdate", prevState)
        return snapshot
    }

    componentDidUpdate(snapshot) {
        console.log("componentdidupdate", snapshot)
    }

    componentWillUnmount() {
        console.log("hello i am removing from dom")
        clearInterval(id)
    }
}

export default LifeCycle