import React from 'react'

    function Footer() {
    return (
        <nav className="navbar navbar-light navbar-expand-md bg-white" data-aos="fade">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://codebyfranck.weebly.com/resume.html"target="_blank">Resume</a>
                    <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                        <span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"id="navcol-1">
                        <ul className="nav navbar-nav">
                            <li className="nav-item" role="presentation"><a className="nav-link active" href="https://codebyfranck.weebly.com/" target="_blank">Portfolio</a></li>
                            <li className="nav-item" role="presentation"><a className="nav-link"  href="https://github.com/franckmartin3d" target="_blank">GitHub</a></li>
                            <li className="nav-item" role="presentation"></li>
                        </ul>
                    </div>
                </div>
        </nav>
        
    );
}
export default Footer;