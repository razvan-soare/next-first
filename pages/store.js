import Link from 'data-prefetch-link'
import cachedFetch, { overrideCache } from '../lib/cached-json-fetch';

import React, { Component } from 'react'

class Store extends Component {
  componentDidMount() {
    const { products, isServerRendered } = this.props;
    if (isServerRendered) {
      overrideCache('https://store.bryant.dental/api/rest/products', products);
    }
  }
  render() {
    const { products } = this.props;
    if (!products) {
      return <h1>there are no products something went wrong</h1>;
    }
    return (
      <React.Fragment>
        <h1>Prods</h1>
        <ul>
          {products.data.map((prod) => (
            <li key={prod.id}>
              <Link
                prefetch
                withData
                as={`/store/${prod.id}`}
                href={`/product?id=${prod.id}`}
              >
                <a>{prod.name || prod.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

Store.getInitialProps = async function({ req }) {
  const products = await cachedFetch('https://store.bryant.dental/api/rest/products', {
    method: 'GET',
    headers: {
      'X-Oc-Session': 'fe5c4db67fb053c14a24d12a05',
      'Content-Type': 'application/json',
      'X-Oc-Currency': 'GBP',
      'X-Oc-Merchant-Id': 'ODUdrFUGCpx2pOrSxd6IhelaI2ge7aQV',
    },
  });
  const isServerRendered = !!req;

  return { products, isServerRendered };
}

export default Store