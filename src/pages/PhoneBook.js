import { useState } from "react"

function PhoneBook() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phonebook, setPhoneBook] = useState([])
    const [data,setData] = useState({name:"",email:""})

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const onChangeLastName = (e) => {
        setLastName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const savePhoneBook = (e) => {
        e.preventDefault();
        console.log(email, firstName, lastName)
        let pObj = {
            firstName,
            lastName,
            email
        }
        setPhoneBook((phonebook)=>[...phonebook,{...pObj}])
        setFirstName("")
        setLastName("")
        setEmail("")
    }
    return (
        <div>
            <h1> Welcome to my phonebook app</h1>
            <form onSubmit={(e) => savePhoneBook(e)}>
                <label>First Name</label>
                <input type="text" value={firstName} onChange={(e) => onChangeFirstName(e)} />
                <label>Last Name</label>
                <input type="text" value={lastName} onChange={(e) => onChangeLastName(e)} />
                <label>email</label>
                <input type="text" value={email} onChange={(e) => onChangeEmail(e)} />
                <button>save</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last Name</th>
                        <th>email</th>
                    </tr>
                </thead>

                <tbody>
                    {phonebook.map((item) => {
                        return (
                            <tr>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default PhoneBook