const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <div className="buttons">
          <a href="/" className="button is-light">
            <strong>Home</strong>
          </a>
          <a href="/products" className="button is-light">
            <strong>Products</strong>
          </a>
          <a href="/products/123" className="button is-light">
            <strong>Mock Single Product</strong>
          </a>
          <a href="/gated" className="button is-light">
            <strong>Gated Content</strong>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
