import React, { Component, createContext } from 'react';

const context = createContext();
const { Provider, Consumer } = context;

class StoreProvider extends Component {
	state = {
    currentUser: 'Dobby',
		handleLogin: user => this.handleLogin(user),
		handleLogout: () => this.handleLogout(),
  };

  handleLogin = user => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };
	

	render() {
    return (
			<Provider value={this.state}>
				{this.props.children}
			</Provider>
		)
  }
}

export { context, StoreProvider, Consumer };