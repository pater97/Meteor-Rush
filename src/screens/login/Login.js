import "./login.css";
import { Howl } from "howler";
import MenuMusic from "../../assets/audios/Menu.m4a";

import Form from "../../components/class-components/form/Form";
import { render } from "@testing-library/react";
import { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.menuMusic = new Howl({
      src: MenuMusic,
      volume: 0.2,
    });
  }

  componentDidMount() {
      this.menuMusic.play();
  }

  componentWillUnmount() {
    this.menuMusic.stop()
  }

  render() {
    return (
      <div className={"login-container"}>
        <h1>METEOR RUSH</h1>
        <Form />
      </div>
    );
  }
}

export default Login;
