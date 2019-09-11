import React from 'react'
import {Link} from 'react-router-dom';

    function RandomNavbar() {
    return (
        
        
    <ul className="nav nav nav-fill my-4">
        <li className="nav-item">
            <Link to="/"><button type="button" className="btn btn-secondary">Personality1</button></Link>
        </li>
        
        <li className="nav-item">
            <Link to="/"><button type="button" className="btn btn-secondary">Personality2</button></Link>
        </li>
  </ul>

   
    );
}
export default RandomNavbar;