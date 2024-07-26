import React from "react";

function Alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
           props.alert && <div className={`alert alert-${props.alert.type} alert-dismissibe fade show my-3`} role="alert" >
                <strong> {capitalize(props.alert.type)}</strong> {props.alert.msg}
                {/* <button type="button" className="btn-close mx-3" data-bs-dismiss="alert" aria-label="close">   </button> */}
         </div>
    );
}

export default Alert;
