import { Component } from "react";
import withRouter from "../../../withRouter";

//css
import './form.css';

//components
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            emailError: false,
            passwordError: false,
            loginError: false
        }

        this.user = []
        if (JSON.parse(localStorage.getItem("users"))) {
            this.user = JSON.parse(localStorage.getItem("users"))
        }

        console.log(this.user)

        this.emailHandler = "";
        this.passwordHandler = "";
    }

    change = (e) => {
        if (e.target.id === "email") {
            this.emailHandler = e.target.value;
        } else {
            this.passwordHandler = e.target.value;
        }
    }

    submit = () => {
        if (
            !(this.handleError()) &&
            this.checkUser()
        ) {
            let currUser = {
                email: this.emailHandler,
                score: 0
            }

            localStorage.setItem('currUser', JSON.stringify(currUser))
            this.props.router.navigate('/tutorial')
        } else {
            this.state.loginError = true;
        }
    }

    checkUser() {

        for (let i = 0; i < this.user.length; i++) {
            console.log(this.user[i]["email"])
            console.log(this.user[i]["password"])

            console.log("Email: ", this.emailHandler)
            console.log("Password: ", this.passwordHandler)
            if (
                this.emailHandler === this.user[i]["email"] &&
                this.passwordHandler === this.user[i]["password"]
            ) {
                return true;
            }
        }

        return false;
    }

    handleError() {

        let state = this.state;
        let error = false;

        if (
            this.emailHandler === "" ||
            /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.emailHandler) === false
        ) {
            state.emailError = true;
            error = true;
            console.log("email error");
        } else {
            state.emailError = false;
            state.email = this.emailHandler;
            console.log("Email:", this.emailHandler);
        }

        if (this.passwordHandler === "") {
            state.passwordError = true;
            error = true;
            console.log("password error");
        } else {
            state.passwordError = false;
            state.password = this.passwordHandler;
            console.log("Password:", this.passwordHandler);
        }

        this.setState(state);
        return error;
    }

    goTo = () => {
        this.props.router.navigate('/register')
    }

    render() {
        return (
            <>
                <form
                    className="form-container"
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.submit();
                    }}
                >
                    <h1>LOGIN</h1>

                    <Input
                        id={"email"}
                        type={"email"}
                        placeholder={"EMAIL"}
                        callback={this.change}
                        isError={this.state.emailError}
                        msg={"Enter a valid email"}
                    />

                    <Input
                        id={"password"}
                        type={"password"}
                        placeholder={"PASSWORD"}
                        callback={this.change}
                        isError={this.state.passwordError}
                        msg={"Enter password"}
                    />

                    {
                        this.state.loginError &&
                        <div className="login-error">Email o password errate</div>
                    }

                    <Button
                        callback={this.submit}
                        label={"ACCEDI"}
                    />

                    <Button
                        callback={this.goTo}
                        label={"REGISTRATI"}
                    />
                </form>
            </>
        );
    }
}

export default withRouter(Form)