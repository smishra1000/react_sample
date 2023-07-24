import { useState } from "react"

const usersData = [
    {
        id: 1,
        name: "test1",
        age: 20,
        email: "test1@gmail.com"
    },
    {
        id: 2,
        name: "test2",
        age: 20,
        email: "test2@gmail.com"
    },
    {
        id: 3,
        name: "test3",
        age: 20,
        email: "test3@gmail.com"
    },
    {
        id: 4,
        name: "test4",
        age: 29,
        email: "test4@gmail.com"
    },
    {
        id: 5,
        name: "test5",
        age: 20,
        email: "test5@gmail.com"
    }
]

function UserList() {
    const [users, setUsers] = useState(usersData)
    const [filterdusers,setFilteredUsers] = useState(usersData)
    const [searchKey,setSearchkey] = useState("")

    const searchUser = (e)=>{
        console.log(e.target.value)
        setSearchkey(e.target.value)
        if(e.target.value!="") {
            let filterdUsers = users.filter((user)=>{
                return user.name.toLowerCase()===e.target.value.toLowerCase();

            })
            setFilteredUsers(filterdUsers)
        }else{
            setFilteredUsers(users)
        }
       
    }
    return (
        <div className="container">
            <h1>users list</h1>
            <div className="row">
                    <div className="col-md-8">
                        <input type="text" placeholder="search user" value={searchKey} onChange={(e)=>searchUser(e)}/>
                    </div>
            </div>
            <div className="row p-y-5" style={{marginTop:'30px'}}>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {filterdusers.map((user) => {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            </div>
            
            {/* {users.map((user)=>{
                return(
                    <li>id : {user.id}  {user.name} {user.email} {user.age}</li>
                )
            })} */}
        </div>
    )
}

export default UserList