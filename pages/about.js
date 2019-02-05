import Link from 'next/link'
import fetch from 'isomorphic-fetch';

import React, { Component } from 'react'

class About extends Component {
  render() {
    const { products } = this.props;
    if (!products) {
      return <h1>There are no products something went wrong</h1>
    }
    return (
      <React.Fragment>
        <h1>Prods</h1>
        <ul>
          {products.data.map((prod) => (
            <li key={prod.id}>
              <Link
                as={`/about/${prod.id}`}
                href={`/about2?id=${prod.id}`}
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

About.getInitialProps = async function() {
  const products = await fetch('https://store.bryant.dental/api/rest/products', {
    method: 'GET',
    headers: {
      'X-Oc-Session': 'fe5c4db67fb053c14a24d12a05',
      'Content-Type': 'application/json',
      'X-Oc-Currency': 'GBP',
      'X-Oc-Merchant-Id': 'ODUdrFUGCpx2pOrSxd6IhelaI2ge7aQV',
    },
  }).then(res => res.json());
  return { products };
}

export default About