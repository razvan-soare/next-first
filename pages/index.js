import React from 'react';
import Link from 'next/link'

const Index = () => (
  <React.Fragment>
    <h1>Prods</h1>
    <Link href='/store' prefetch>
      <a>See store</a>
    </Link>
    
  </React.Fragment>
)

export default Index