import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <nav className="navbar">
            <h2> College </h2>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/addstudent"> Add Student </Link>
                <Link to="/getAllStudents"> getAllStudents</Link>
                <Link to="/login"> Login </Link>

            </div>
        </nav>
    );
}

export default Navbar;