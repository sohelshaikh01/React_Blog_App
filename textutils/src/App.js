import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/navbar.js";
// import Alert from "./components/Alert.js";
// import Textform from "./components/Textform.js";
// import About from './components/About.js';

// import {
//     Routes,
//     Route
// }   from "react-router-dom";


// let name = "Theron";
// Any thing inside the {} this will be treated as JavaScript.

function App() {

    // Whether dark mode is enable or not.
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);


    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#055160";
            showAlert("Dark mode has been enabled.", "success");
            document.title = "TextUtils - Dark Mode";
        } 
        else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Light mode has been enabled.", "success");
            document.title = "TextUtils - Light Mode";
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

            {/* <Alert alert={alert}> </Alert> */}

           
                {/* { <Routes> */}
                    {/* You need to write exact to avoid partial matching path */}
                    {/* <Route exact path="/about" element={<About className="container" mode={mode}/>}/> */}
                    {/* <Route exact path="/home" element={<Textform className="container" heading="This is heading of the TextArea" mode={mode} showAlert={showAlert}/>}/> */}
                {/* </Routes>}  */}

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

