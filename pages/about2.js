import React, { Component } from 'react'
import fetch from 'isomorphic-fetch';

class About2 extends Component {
  render() {
    const { product } = this.props;
    return (
      <h1>{product.name}</h1>
    )
  }
}

About2.getInitialProps = async function(context) {
  const { id } = context.query

  const product = await fetch(`https://store.bryant.dental/api/rest/products/${id}`, {
    method: 'GET',
    headers: {
      'X-Oc-Session': 'fe5c4db67fb053c14a24d12a05',
      'Content-Type': 'application/json',
      'X-Oc-Currency': 'GBP',
      'X-Oc-Merchant-Id': 'ODUdrFUGCpx2pOrSxd6IhelaI2ge7aQV',
    },
  }).then(res => res.json());

  return { product: product.data };
}

export default About2;