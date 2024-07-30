import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
            <Link className="navbar-brand" to="/home">
                {props.title}
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home">
                    Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">
                    about
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link disabled" aria-disabled="true" to="/">
                    Disabled
                    </Link>
                </li>
                </ul>

                {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                />

                <button className="btn btn-secondary" type="submit">
                    Search
                </button>
                </form> */}
                
                <div className="d-flex">
                    <div className="bg-primary rounded mx-2" onClick={() => {props.toggleMode('primary')}} style={{height: "30px", width: "30px"}}></div>
                    <div className="bg-danger rounded mx-2" onClick={() => {props.toggleMode('danger')}} style={{height: "30px", width: "30px"}}></div>
                    <div className="bg-success rounded mx-2" onClick={() => {props.toggleMode('success')}} style={{height: "30px", width: "30px"}}></div>
                    <div className="bg-warning rounded mx-2" onClick={() => {props.toggleMode('warning')}} style={{height: "30px", width: "30px"}}></div>
                </div>

                <div className="form-check form-switch">
                    <input className="form-check-input cursor-pointer" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.toggleMode} />

                    {/* <input className="form-check-input cursor-pointer" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.toggleMode} /> */}
                    <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault"> Enable {props.mode==='dark'?'Light':'Dark'} Mode</label>
                </div>

            </div>
            </div>
        </nav>
  );
}

// Read the components, prop and propTypes on react docs.

// Props are just passing the values as parameters.
// It is used to get message whenever the wrong types of prop is used.
Navbar.propTypes = { 
                        title: PropTypes.string,
                        // title: PropTypes.string.isRequired, necesarry to fill, resolve after default values
                        // To ensure that the props are not undefined
                        aboutText: PropTypes.string
                }
            
// We should must write isRequired and also set default props values.
Navbar.defaultProps = {
                        title: "Set the values",
                        aboutText: "In default ways"
                    }            