import React, { Component } from 'react'
import cachedFetch, { overrideCache } from '../lib/cached-json-fetch';

class Product extends Component {
  componentDidMount() {
    if (this.props.isServerRendered) {
      overrideCache(`https://store.bryant.dental/api/rest/products/${this.props.id}`, this.props.product);
    }
  }
  render() {
    const { product } = this.props;
    return (
      <h1>{product.name}</h1>
    )
  }
}

Product.getInitialProps = async function({ query, req }) {
  const { id } = query;

  const product = await cachedFetch(`https://store.bryant.dental/api/rest/products/${id}`, {
    method: 'GET',
    headers: {
      'X-Oc-Session': 'fe5c4db67fb053c14a24d12a05',
      'Content-Type': 'application/json',
      'X-Oc-Currency': 'GBP',
      'X-Oc-Merchant-Id': 'ODUdrFUGCpx2pOrSxd6IhelaI2ge7aQV',
    },
  });
  const isServerRendered = !!req;
  return { product: product.data, isServerRendered, id };
}

export default Product