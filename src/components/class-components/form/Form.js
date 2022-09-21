import { Component } from "react";
import './form.css';
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";


class Form extends Component{
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            usernameError: false,
            passwordError: false
        }

        this.usernameHandler = "";
        this.passwordHandler = "";
    }

    change = (e) => {
        if(e.target.id === "username") {
            this.usernameHandler = e.target.value;
        } else {
            this.passwordHandler = e.target.value;
        }
    }

    submit = () => {
        this.handleError();
    }

    handleError(){
        let state = this.state;

        if(this.usernameHandler === ""){
            state.usernameError = true;
            console.log("username error");
        } else {
            state.usernameError = false;
            state.username = this.usernameHandler;
            console.log("Username:", this.usernameHandler);
        }

        if(this.passwordHandler === ""){
            state.passwordError = true;
            console.log("password error");
        } else {
            state.passwordError = false;
            state.password = this.passwordHandler;
            console.log("Password:", this.passwordHandler);
        }

        this.setState(state);
    }

    render(){
        return(
            <form
                className="form-container"
                onSubmit={(e) => {
                    e.preventDefault();
                    this.submit();
                }}
            >
                <h1>LOGIN</h1>

                <Input
                    id={"username"}
                    type={"text"}
                    placeholder={"Username"}
                    callback={this.change}
                    isError={this.state.usernameError}
                />

                <Input
                    id={"password"}
                    type={"password"}
                    placeholder={"Password"}
                    callback={this.change}
                    isError={this.state.passwordError}
                />

                <Button
                    callback={this.submit}
                    label={"Accedi"}
                />
            </form>
        );
    }
}

export default Form