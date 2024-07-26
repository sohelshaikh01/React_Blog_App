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

    // Text copy function
    const CopyClipboard = () => {
        navigator.clipboard.writeText(text).then(function () {
            console.log("Copy to the clipboard is successful.");
        }, function(err) {
            console.log("Could not copy due to this error");
        });
        props.showAlert("Text copied to the clipboard.", "success");
    }


    const [text, setText] = useState('');
    // using hooks and setText() for updating value.

  return (
        <>
            <div className='my-5 container' style ={{color: props.mode==='dark'?'white':'black'}}>

                <h1> {props.heading} </h1>

                <div className="mb-3">
                    {/* can write in box because value is set */}
                    <textarea className="form-control" 
                    onChange={handleOnChange} 
                    style ={
                        {
                            backgroundColor: props.mode==='dark'?'#052c65':'white', 
                            color: props.mode==='dark'?'white':'black', 
                            borderColor: props.mode==='dark'?'white':'black'
                        }
                    } 
                    value={text} id="exampleFormControlTextarea1" 
                    rows="10"> </textarea>

                </div>

                <button className="btn btn-primary" onClick={handleUpClick}> {props.title1} </button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}> {props.title2} </button>
                <button className="btn btn-primary mx-2" onClick={CopyClipboard}> Copy to Clipboard </button>

            </div>
            <div className="my-3 container" style ={{color: props.mode==='dark'?'white':'black'}}>

                <h2> Your Text summary</h2>
                <p> {text.split(" ").length} word, and {text.length} characters </p>
                <p> {0.008 * text.split(" ").length} Minutes read </p>

                <div className="form-control" 
                style = {
                    {
                        backgroundColor: props.mode==='dark'?'#052c65':'white', 
                        color: props.mode==='dark'?'white':'black', 
                        borderColor: props.mode==='dark'?'white':'black'
                    }
                }>
                    <h2 > Preview</h2>
                    <p> {text.length>0?text:"Enter something in the textbox above to preview it here."} </p>
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

