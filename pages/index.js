import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const Index = () => (
  <Layout>
    <h1>Prods</h1>
    <Link href='/store' prefetch>
      <a>See store</a>
    </Link>
    
  </Layout>
)

export default Index