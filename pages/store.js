import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Store = (props) => (
  <Layout>
    <h1>Prods</h1>
    <ul>
      {props.products.map((prod) => (
        <li key={prod.id}>
          <Link prefetch as={`/store/${prod.id}`} href={`/product?id=${prod.id}`}>
            <a>{prod.name || prod.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Store.getInitialProps = async function() {
  const res = await fetch('https://store.bryant.dental/api/rest/products', {
    method: 'GET',
    headers: {
      'X-Oc-Session': 'fe5c4db67fb053c14a24d12a05',
      'Content-Type': 'application/json',
      'X-Oc-Currency': 'GBP',
      'X-Oc-Merchant-Id': 'ODUdrFUGCpx2pOrSxd6IhelaI2ge7aQV',
    },
  })
  // const res = await fetch('https://store.bryant.dental/api/rest/products')
  const data = await res.json()

  return {
    products: data.data
  }
}

export default Store