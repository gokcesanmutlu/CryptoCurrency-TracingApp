import { Link, NavLink } from "react-router-dom"

const HeaderView = () => {
    return (
        <header className="d-flex justify-content-between p-5 align-items-center">
            <Link to={"/home"} className="d-flex align-items-center gap-3">
                <img height={40} src="/c-logo.png" />
                <h3 className="text-light">Coinmania</h3>
            </Link>


            <nav className="d-flex gap-4">
                <NavLink to={"/"}>Login</NavLink>
                <NavLink to={"/home"}>Home</NavLink>
            </nav>
        </header>
    )
}

export default HeaderView