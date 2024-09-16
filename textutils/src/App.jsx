import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/Navbar.jsx";
import Alert from "./components/Alert.jsx";
import Textform from "./components/Textform.jsx";
import About from './components/About.jsx';

import {
    Routes,
    Route
}   from "react-router-dom";


function App() {

    // Whether dark mode is enable or not.
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    // More themes Section
    // const removeBodyClasses = () => {
    //     document.body.classList.remove('bg-primary');
    //     document.body.classList.remove('bg-white');
    //     document.body.classList.remove('bg-light');
    //     document.body.classList.remove('bg-dark');
    //     document.body.classList.remove('bg-black');
    //     document.body.classList.remove('bg-warning');
    //     document.body.classList.remove('bg-danger');
    //     document.body.classList.remove('bg-success');
    // }

    // const toCapitalize = (word) => {
    //         const Capt = word.charAt(0).toUpperCase() + word.slice(1);
    //         return Capt;
    // }

    // const toggleTheme = (cls) => {
        
    //     removeBodyClasses();
    //     document.body.classList.add('bg-'+cls); 
    //     // This works for each only after each reload.
    //     showAlert(`${toCapitalize(cls)} theme has been enabled.`, "success");
    // };

    const toggleMode = () => {

        // removeBodyClasses();
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#055160";
            showAlert("Dark mode has been enabled.", "success");
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
            <Alert alert={alert}> </Alert>
        
            { <Routes>

                <Route exact path="/home" element={<Textform className="container" heading="Try TextUtils - Word Counter, Character Counter, Remove Extra spaces" mode={mode}  showAlert={showAlert}/>}/>
                
                <Route exact path="/about" element={<About className="container" mode={mode} />}/>
                
            </Routes>} 

        </>


  );
}


export default App;
