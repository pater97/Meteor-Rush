import { Component } from "react";
import "./login.css";

import Form from "../../components/class-components/form/Form";

class Login extends Component{
    constructor(props){
        super(props);
    }

    change(e){

    }

    render(){
        return(
            <div className={"login-container"}>
                <h1>TITOLO GAME</h1>
                <Form />
            </div>
        );
    }
}

export default Login