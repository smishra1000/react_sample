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
            </ul>
        </div>
    )
}

export default Header