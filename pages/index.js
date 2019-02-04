import React from 'react';
import Link from 'data-prefetch-link'

const Index = () => (
  <React.Fragment>
    <h1>Prods</h1>
    <Link href='/store' withData prefetch>
      <a>See store</a>
    </Link>
    
  </React.Fragment>
)

export default Index