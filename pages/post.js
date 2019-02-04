import Layout from "../components/MyLayout.js";
import { withRouter } from "next/router";

export default withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
  </Layout>
));
