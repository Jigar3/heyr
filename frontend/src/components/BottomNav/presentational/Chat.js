import React, { Component } from "react";
import { css } from "emotion";
import convocolor from "../../../assets/convo-color.svg";
import convo from "../../../assets/convo.svg";

import { history } from "../../Home";
class Chat extends Component {
  constructor(props) {
    super(props);
  }
  nav = () => {
    history.push("/chat");
    this.props.onNav("chat");
  };
  render() {
    if (this.props.active === "chat") {
      return <img onClick={this.nav} alt="icon" src={convocolor} />;
    } else {
      return <img onClick={this.nav} alt="icon" src={convo} />;
    }
  }
}
export default Chat;
