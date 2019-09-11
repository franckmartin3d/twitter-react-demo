import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

    function middle() {
    return (
        <div className="jumbotron jumbotron-fluid text-center border-primary" >
        <h1  className="display-4">SHOWCASE</h1>
        <p>Tweets pulled from search</p>
         {/* <!-- Grid 3 rows x 6 columns (2 arrow 12 tweet)  -->*/}

        <div>
            {/* <!-- row2 --> */}
            <div className="row">
                <div className="col-md m-2">
                <img src="/img/left-arrow.png"  className="img-fluid  max-width: 30%; height: auto;" alt="Responsive image"/>
                </div>
                <div className="col-md m-2">
                   {/* <!-- card --> */}
                   <div className="card">
                      <img src="/img/jay.png" className="card-img-top" alt="twiter user"/>
                      <div className="card-body">
                        <h5 className="card-title">Twitter Account</h5>
                        <p className="card-text">Tweet content.</p>
                      </div>
                    </div>
                  {/* <!-- /card --> */}
                </div>
                <div className="col-md m-2"> 
                  {/* <!-- card --> */}
                  <div className="card">
                      <img src="/img/jay.png" className="card-img-top" alt="twiter user"/>
                      <div className="card-body">
                        <h5 className="card-title">Twitter Account</h5>
                        <p className="card-text">Tweet content.</p>
                      </div>
                    </div>
                  {/* <!-- /card --> */}
                </div>
                <div className="col-md m-2">
                   {/* <!-- card --> */}
                   <div className="card">
                      <img src="/img/jay.png" className="card-img-top" alt="twiter user"/>
                      <div className="card-body">
                        <h5 className="card-title">Twitter Account</h5>
                        <p className="card-text">Tweet content.</p>
                      </div>
                    </div>
                  {/* <!-- /card --> */}
                </div>
                <div className="col-md m-2"> 
                {/* <!-- card --> */}
                  <div className="card">
                      <img src="/img/jay.png" className="card-img-top" alt="twiter user"/>
                      <div className="card-body">
                        <h5 className="card-title">Twitter Account</h5>
                        <p className="card-text">Tweet content.</p>
                      </div>
                    </div>
                  {/* <!-- /card --> */}
                </div>
                <div className="col-md m-2">
                    <img src="/img/right-arrow.png"  className="img-fluid  max-width: 30%; height: auto;" alt="Responsive image"/>
                </div>
            </div>
        </div>
    </div>       
       
    );
}
export default middle;