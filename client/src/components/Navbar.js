import React from 'react'
import {Link} from 'react-router-dom';

    function Navbar() {
    return (
        
        
    <ul className="nav nav nav-fill my-4">
    <li className="nav-item">
        <Link to="/"><button type="button" className="btn btn-secondary">Home</button></Link>
    </li>
    <li className="nav-item">
        {/* <!-- search --> */}
            <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search"/>
                    <div className="input-group-append">
                      <button className="btn btn-secondary" type="submit">Go</button>
                    </div>
            </div>
        {/* <!-- /search --> */}
    </li>
    <li className="nav-item">
    <Link to="/Random"><button type="button" className="btn btn-secondary">Random</button></Link>
    </li>
  </ul>

   
    );
}
export default Navbar;