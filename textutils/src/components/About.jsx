import React from 'react';

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#0a5873':'white',
    }

    return (
        <>
            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}} >
                <h1 className="pt-3"> About Us </h1>
            
                <div className="accordion py-3" id="accordionExample" style ={{color: props.mode === 'dark'?'white':'black'}}  >

                    <div className="accordion-item" >
                        <h2 className="accordion-header"  >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style ={myStyle}  >
                            <strong>Analyze Your Text</strong>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style ={myStyle}  >
                            Textutils gives you a way to analyze your text quickly and effectively. Be it word count, character count or any other thing.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item" style ={{backgroundColor: props.mode==='dark'?'#055160':'white', color: props.mode==='dark'?'white':'black'}} >
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style ={myStyle} >
                            <strong>Free To Use</strong>
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style ={myStyle} >
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>

                    <div className="accordion-item" style ={myStyle} >
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style ={myStyle} >
                            <strong>Browser Compatible</strong>
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style ={myStyle}  >
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>

                </div>

        </div>
        </>
    );
}
