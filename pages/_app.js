import App, { Container } from "next/app";
import { StoreProvider } from "../lib/storeProvider";
import { Provider } from "../lib/globalProvider";
import Layout from "../components/MyLayout.js";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // Gets inital props for server rendering
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    /**
     * We can also add a layout for all pages
     * just wrap Component with a custom component and there you can have
     * your global layout
     */
    return (
      <Container>
        <Provider>
          <StoreProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </StoreProvider>
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
