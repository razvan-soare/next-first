import React from 'react';
import { Consumer } from './storeProvider';

const withStore = Component => {
  return class Wrapper extends React.PureComponent {
    static async getInitialProps({ ctx }) {
      // Gets inital props for server rendering
      let pageProps = {};
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
      // this exposes the query to the user
      return { ...pageProps };
    }

    render() {
      return (
        <Consumer>
          {store => {
            return <Component {...this.props} store={store} />;
          }}
        </Consumer>
      );
    }
  };
};

export default withStore;