import React, { Component } from "react";
import fetch from "isomorphic-unfetch";

import withStore from "../lib/withStore";

class About extends Component {
  render() {
    const { articles } = this.props;

    return (
      <div>
        {articles.map(article => {
          return <p key={article._id}>{article.title}</p>
        })}
      </div>
    );
  }
}

About.getInitialProps = async function() {
  const res = await fetch("http://next.veurk.com/articles/");
  const articles = await res.json();

  return { articles };
}


export default withStore(About);
