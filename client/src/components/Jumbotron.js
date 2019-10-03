import React from 'react'
import {Link} from 'react-router-dom';

    function Jumbotron() {
    return (
        
        <div className="bg-white">
            <div className="jumbotron jumbotron-fluid text-center border-primary" >
                <h1>Twitter Showcase</h1>
                <p>This is a simple app that use the react framework to showcase some twitter account</p>
                
                <div className="btn-group shadow" role="group" data-aos="fade">
                    <Link className="btn btn-secondary text-left text-white-50" role="button" to="/search">Search Twitter</Link>
                    <Link className="btn btn-secondary text-white-50" role="button" to="/random" >Random Twitter</Link></div>
                </div>
            </div>
    );
}
export default Jumbotron;