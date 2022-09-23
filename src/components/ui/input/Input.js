import React from "react";
import './input.css';

import InputError from "../inputError/InputError";

function Input(props){

    function change(e){
        if(!!props.callback)
            props.callback(e);
    }

    return(
        <div className="input-container">
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                className={"input-box"}
                onChange={change}
            />
            {props.isError && <InputError msg={props.msg} />}
        </div>
    );
}

export default Input;