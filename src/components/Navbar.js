import React from 'react'

    function Navbar() {
    return (
        
        
    <ul className="nav nav nav-fill my-4">
    <li className="nav-item">
        <a href="/src/home.html"><button type="button" className="btn btn-secondary">Home</button></a>
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
        <a href="/base/random.html"><button type="button" className="btn btn-secondary">Random</button></a>
    </li>
  </ul>

   
    );
}
export default Navbar;