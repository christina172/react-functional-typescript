import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="brand">
                <Link to="/">
                    <h1>Rick and Morty</h1>
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/">Characters</Link>
                </li>
                <li>                    
                    <Link to="/locations">Locations</Link>
                </li>
            </ul>
        </nav>
    )
}

export {Navbar};