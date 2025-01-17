import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) =>  {

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <Link className="navbar-brand" to="/"> NewsMonkey</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item active">
                        <Link className="nav-link" to="/home"> Home <span className="sr-only">(current)</span></Link>  </li>
                    <li className="nav-item"> <Link className="nav-link" to="/business">Business</Link> </li>
                    <li className="nav-item"> <Link className="nav-link" to="/entertainment">Entertainment</Link> </li>
                    <li className="nav-item"> <Link className="nav-link" to="/health">Health</Link> </li>
                    <li className="nav-item"> <Link className="nav-link" to="/science">Science</Link> </li>
                    <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link> </li>
                    <li className="nav-item"> <Link className="nav-link" to="/technology">Technology</Link> </li>

                </ul>

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search News" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>

            </div>
        </nav>
      </>

    )
}

export default Navbar;
