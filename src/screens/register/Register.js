// import react component
import { Component } from "react"

// importo il routing 
import withRouter from "../../withRouter";

// import components
import Button from "../../components/ui/button/PersonalButton"
import InputBox from "../../components/ui/input/InputBox"

// css
import './register.css'


class Register extends Component {
  constructor(props) {

    super(props)
    
    this.user = []
    if(JSON.parse(localStorage.getItem("users"))){
      this.user = JSON.parse(localStorage.getItem("users"))
    }

    this.state = {
      usernameError: false,
      emailError: false,
      passwordError: false
    }

    this.usernameHandler = "";
    this.emailHandler = "";
    this.passwordHandler = "";

  }

  change = (e) => {

    switch (e.target.id) {
      case "username":
        this.usernameHandler = e.target.value;
        break;

      case "email":
        this.emailHandler = e.target.value;
        break;

      case "password":
        this.passwordHandler = e.target.value;
        break;
    }
  }

  clickButton = () => {

    let userState = this.user;

    if(!(this.handleError())){

      userState.push({
        name: this.usernameHandler,
        email: this.emailHandler,
        password: this.passwordHandler,
        score: 0
      })

      localStorage.setItem('users', JSON.stringify(userState))
      this.props.router.navigate('/')
    }
  }

  handleError() {
    
    let state = this.state;
    let user = this.user;
    let error = false;

    if (this.usernameHandler === "") {
      state.usernameError = true;
      error = true;
      console.log("username error");
    } else {
      state.usernameError = false;
      user.name = this.usernameHandler;
      console.log("Username:", this.usernameHandler);
    }

    if (
      this.emailHandler === "" || 
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.emailHandler) === false ||
      this.checkEmail() === true
    ) {
      state.emailError = true;
      error = true;
      console.log("email error");
    } else {
      state.emailError = false;
      user.email = this.emailHandler;
      console.log("Email:", this.emailHandler);
    }

    if (this.passwordHandler === "") {
      state.passwordError = true;
      error = true;
      console.log("password error");
    } else {
      state.passwordError = false;
      user.password = this.passwordHandler;
      console.log("Password:", this.passwordHandler);
    }

    this.setState(state);
    return error;
  }

  checkEmail(){

    for (let i = 0; i < this.user.length; i++) {
      if (this.emailHandler === this.user[i]["email"]) {
          console.log("errore")
          return true;
      }
  }

  return false;
  }

  render() {
    return (
      <div className="register">
        <form className="register-container">
          <h1>REGISTRAZIONE</h1>
            
            <InputBox
              id={"username"}
              type={"text"}
              placeholder={"USERNAME"}
              callBack={this.change}
              isError={this.state.usernameError}
              msg={"Enter username"}
            />

            <InputBox
              id={"email"}
              type={"email"}
              placeholder={"EMAIL"}
              callBack={this.change}
              isError={this.state.emailError}
              msg={"Enter a valid email"}
            />

            <InputBox
              id={"password"}
              type={"password"}
              placeholder={"PASSWORD"}
              callBack={this.change}
              isError={this.state.passwordError}
              msg={"Enter password"}
            />

            <Button
              callBack={this.clickButton}
              label={"REGISTRATI"}
            />

        </form>
      </div>
    )
  }
}

export default withRouter(Register)
