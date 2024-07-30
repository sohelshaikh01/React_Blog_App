import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/Navbar.js";
import Alert from "./components/Alert.js";
import Textform from "./components/Textform.js";
import About from './components/About.js';

import {
    Routes,
    Route
}   from "react-router-dom";


// let name = "Theron";
// Any thing inside the {} this will be treated as JavaScript.

function App() {

    // Whether dark mode is enable or not.
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const removeBodyClasses = () => {
        document.body.classList.remove('bg-light');
        document.body.classList.remove('bg-dark');
        document.body.classList.remove('bg-warning');
        document.body.classList.remove('bg-danger');
        document.body.classList.remove('bg-success');
    }

    const toggleMode = (cls) => {
        removeBodyClasses();
        document.body.classList.add('bg-'+cls);
        // This works for each only after each reload

        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#055160";
            showAlert("Dark mode has been enabled.", "success");
            // document.title = "TextUtils - Dark Mode";
        } 
        else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Light mode has been enabled.", "success");
        }
    };


    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        });
        setTimeout(() => {
                setAlert(null);
        }, 3000);
    }


  return (
    <>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            {/* <Navbar/> */}
            {/* It has default props values */}

            <Alert alert={alert}> </Alert>

           
                { <Routes>
                    <Route exact path="/about" element={<About className="container" mode={mode} />}/>
                    <Route exact path="/home" element={<Textform className="container" heading="Try TextUtils - Word Counter, Character Counter, Remove Extra spaces" mode={mode}  showAlert={showAlert}/>}/>
                </Routes>} 

            {/* <div className="container" classTexttransform >
                <Textform className="container" heading="This is heading of the TextArea" mode={mode} showAlert={showAlert}/>
            </div> */}

            {/* <div className="container my-5">
                <About mode={mode} />
            </div> */}

    </>


  );
}


export default App;
