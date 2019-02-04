import Link from "next/link";
import PrefetchLink from "data-prefetch-link";
const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/" prefetch>
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about" prefetch>
      <a style={linkStyle}>About</a>
    </Link>

    <PrefetchLink href="/store" prefetch withData>
      <a style={linkStyle}>Store</a>
    </PrefetchLink>
    <PrefetchLink href="/article" prefetch withData>
      <a style={linkStyle}>Article</a>
    </PrefetchLink>
  </div>
);

export default Header;
