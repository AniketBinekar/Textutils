import React from 'react'

function alert(props) {
    const captial=(word)=>
    {
            const lower=word.toLowerCase();
            return lower.charAt(0).toUpperCase()+lower.slice();
    }
    return (
       props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">

       <strong> {captial(props.alert.type)}</strong>: {props.alert.msg}
        /* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */
      </div>
    )
}

export default alert
