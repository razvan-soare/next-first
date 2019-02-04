import Link from 'data-prefetch-link'
import fetch from 'isomorphic-unfetch'

const Store = (props) => (
  <React.Fragment>
    <h1>Prods</h1>
    <ul>
      {props.products.map((prod) => (
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

Store.getInitialProps = async function() {
  console.log('IM CALLED ONCE')
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