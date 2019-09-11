import React from 'react'

    function Jumbotron() {
    return (
        
        <div className="bg-white">
            <div className="jumbotron jumbotron-fluid text-center border-primary" >
                <h1>Twitter Showcase</h1>
                <p>This is a simple app that use the react framework to showcase some twitter account</p>
                
                <div className="btn-group shadow" role="group" data-aos="fade">
                    <a className="btn btn-secondary text-left text-white-50" role="button" href="/search">Search Twitter</a>
                    <a className="btn btn-secondary text-white-50" role="button" href="/base/random.html" >Random Twitter</a></div>
                </div>
            </div>
    );
}
export default Jumbotron;