

import { Link } from "react-router-dom";



const Header = () => {
    return ( 
        <header>
            <h1><span>Movie App</span></h1>
            <nav>
                <ul>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/Movies">Movies</Link></li>
                    <li><Link to="/Add">Add Movies</Link></li>
                                      
                </ul>
            </nav>
        </header>
     );
}

export default Header;