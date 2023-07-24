import { Link } from "react-router-dom"
function Header() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">Aboutus</Link></li>
                <li><Link to="/contactus">Contactus</Link></li>
                <li><Link to="/phonebook">PhoneBook</Link></li>
                <li><Link to="/employee">Employee</Link></li>
                <li><Link to="/propsdrilling">PropsDrill</Link></li>
                <li><Link to="/hooksdemo">Hooks</Link></li>
                <li><Link to="/userlist">User list</Link></li>
                <li><Link to="/counterredux">Counter Using Redux</Link></li>
                <li><Link to="/empredux">Employee Redux</Link></li>
            </ul>
        </div>
    )
}

export default Header