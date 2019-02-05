import React, { Component } from "react";
import cachedFetch, { overrideCache } from "../lib/cached-json-fetch";

class Article extends Component {
  componentDidMount() {
    if (this.props.isServerRendered) {
      overrideCache(
        "http://next.veurk.com/articles/5c49f86bc97dd900101a8abb",
        this.props.article
      );
    }
  }
  render() {
    const { html, css } = this.props;
    if (!html || !css) {
      return <h1>There is a problem with html or css fetch</h1>
    }
    return (
      <React.Fragment>
        <style>{css}</style>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </React.Fragment>
    );
  }
}

Article.getInitialProps = async function({ req }) {
  const article = await cachedFetch(
    "http://next.veurk.com/articles/5c49f84fc97dd900101a8aba",
    {
      method: "GET"
    }
  );

  const isServerRendered = !!req;
  return { article, html: article.gjshtml, css: article.gjscss, isServerRendered };
};

export default Article;
