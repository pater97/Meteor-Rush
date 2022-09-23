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
    this.user =
      {
      name: '',
      mail: '',
      score: 0
      }
  }

  // pass input value to App
  getValue(e) {
    this.user.name = e.target.value
    console.log(this.user.name)
  }

  getEmail(e) {
    this.user.mail = e.target.value
  }

  clickButton() {
    console.log(this.user)
    localStorage.setItem('user', JSON.stringify(this.user))
    this.props.router.navigate('/Game')
  }

  render() {
    return (
      <div className="register">
        <div className="container-register">
            <h1>REGISTER</h1>
            <form>
            <InputBox
                placeholder={"Inserisci il tuo nome"}
                callBack={this.getValue.bind(this)}
            />
            <InputBox
                placeholder={"Inserisci la tua email"}
                callBack={this.getEmail.bind(this)}
                type={"email"}
            />
            <Button
                label={"Inizia la sfida"}
                callBack={this.clickButton.bind(this)}
            />
            </form>
        </div>
      </div>
    )
  }
}

export default withRouter(Register)
