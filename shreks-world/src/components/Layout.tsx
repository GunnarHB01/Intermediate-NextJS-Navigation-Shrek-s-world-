import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <header>
      <h1>Shrek's World</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/characters">Characters</Link>
        <Link href="/locations">Locations</Link>
        <Link href="/about">About</Link>
        <Link href="/search">Search</Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>© 2024 Shrek's World. All rights reserved.</p>
    </footer>
  </div>
);

export default Layout;