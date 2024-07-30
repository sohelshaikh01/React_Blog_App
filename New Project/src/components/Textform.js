import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function Textform(props) {
    
    // This application work as converting the text UpperCase.
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // console.log("Uppercase was clicked: " + text);
        props.showAlert("Converted to Uppercase.", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase.", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
        // It make to change value in textarea box
    }

    const clearText = () => {
        setText("");
    }

    // Text copy function
    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(function () {
            console.log("Copy to the clipboard is successful.");
            document.getSelection().removeAllRanges();
        }, function(err) {
            console.log("Could not copy due to this error");
        });
        props.showAlert("Text copied to the clipboard.", "success");
    }

    let bgStyle = { 
        backgroundColor: props.mode==='dark'?'#0a5873':'white', 
        color: props.mode==='dark'?'white':'black', 
        borderColor: props.mode==='dark'?'white':'black'
    }

    // let disabled = () => {
    //     return text.length === 0;
    // }; but use disabled={disabled()}
      

    const [text, setText] = useState('');
    // using hooks and setText() for updating value.

  return (
        <>
            <div className='my-3 container' style ={{color: props.mode==='dark'?'white':'black'}}>

                <h1 className="mb-3"> {props.heading} </h1>

                <div className="mb-3">
                    {/* can write in box because value is set */}
                    <textarea className="form-control" 
                    onChange={handleOnChange} 
                    style ={bgStyle} 
                    value={text} id="exampleFormControlTextarea1" 
                    rows="10"> </textarea>

                </div>

                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleUpClick} style={{backgroundColor: props.mode==='dark'?'#0a5873':'white'}}> {props.title1} </button>
                <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleLowClick} style={{backgroundColor: props.mode==='dark'?'#0a5873':'white'}}> {props.title2} </button>
                <button disabled={text.length===0} className="btn btn-primary m-2 " onClick={handleCopy} style={{backgroundColor: props.mode==='dark'?'#0a5873':'white'}}> Copy to Clipboard </button>
                <button disabled={text.length===0} className="btn btn-primary m-2 " onClick={clearText} style={{backgroundColor: props.mode==='dark'?'#0a5873':'white'}}> Clear Text </button>

            </div>
            <div className="my-3 container" style ={{color: props.mode==='dark'?'white':'black'}}>

                <h2> Your Text summary</h2>

                <p> {text.split(" ").filter((element) => {return element.length!==0}).length} word, and {text.length} characters </p>
                <p> {0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes read </p>

                <div className="form-control" 
                style = { bgStyle }>
                    <h2 > Preview</h2>
                    <p> {text.length>0?text:"Nothing to preview here"} </p>
                </div>
                
            </div>
        </>
  );
}

Textform.propTypes = {
                    heading: PropTypes.string.isRequired,
            }
Textform.defaultProps = {
                    title1:  "Convert to UpperCase",
                    title2:  "Convert to LowerCase",
            }

