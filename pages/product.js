import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Store = (props) => (
  <Layout>
    <h1>{props.product.name}</h1>
  </Layout>
)

Store.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://store.bryant.dental/api/rest/products/${id}`, {
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
    product: data.data
  }
}

export default Store