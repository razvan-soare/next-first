import React, { Component, createContext } from "react";

const context = createContext();
const { Provider, Consumer } = context;

class GlobalProvider extends Component {
  state = {
    global: "Im a state"
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { context, GlobalProvider as Provider, Consumer };
