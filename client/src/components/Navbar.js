import React from 'react'
import {Link} from 'react-router-dom';

    function Navbar() {
    return (
        
        
    <ul className="nav nav nav-fill my-4">
    <li className="nav-item">
        <Link to="/"><button type="button" className="btn btn-secondary">Home</button></Link>
    </li>
    <li className="nav-item">
        <Link to="/search"><button type="button" className="btn btn-secondary">Tweet Search</button></Link>
    </li>
    <li className="nav-item">
    <Link to="/StarTweetPage"><button type="button" className="btn btn-secondary">Space Tweets</button></Link>
    </li>
  </ul>

   
    );
}
export default Navbar;