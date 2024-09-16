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
                            <Link className="nav-link" aria-current="page" to="/home">
                            Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                            About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true" href="/">
                            Disabled
                            </a>
                        </li>
                    </ul>
                    
                    {/* Button for different themes */}
                    {/* <div className="d-flex">

                        <div className="rounded m-2 py-2"  onClick={() => {props.toggleTheme((props.mode==='light'?'white':'black'))}} style={{height: "30px", width: "30px", backgroundColor: 'gray'}}></div>

                        <div className="bg-primary rounded m-2 py-2" onClick={() => {props.toggleTheme('primary')}} style={{height: "30px", width: "30px"}}></div>
                        <div className="bg-danger rounded m-2 py-2" onClick={() => {props.toggleTheme('danger')}} style={{height: "30px", width: "30px"}}></div>
                        <div className="bg-success rounded m-2 py-2" onClick={() => {props.toggleTheme('success')}} style={{height: "30px", width: "30px"}}></div>
                        <div className="bg-warning rounded m-2 py-2" onClick={() => {props.toggleTheme('warning')}} style={{height: "30px", width: "30px"}}></div>

                    </div> */}

                    <div className="form-check form-switch mx-2 py-2">
                        <input className="form-check-input cursor-pointer" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.toggleMode} />
                        <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault"> Enable {props.mode==='dark'?'Light':'Dark'} Mode</label>
                    </div>

                </div>
            </div>
        </nav>
  );
}

// Read the components, prop and propTypes on react docs.

// This may showing just simple alert in console.
// We should must write isRequired and also set default props values.
Navbar.defaultProps = {
                        title: "Set the values",
                        aboutText: "In default ways"
                    }            
// Props are just passing the values as parameters.
// It is used to get message whenever the wrong types of prop is used.

Navbar.propTypes = { 
                        title: PropTypes.string,
                        // title: PropTypes.string.isRequired, necesarry to fill, resolve after default values
                        // To ensure that the props are not undefined
                        aboutText: PropTypes.string
                }