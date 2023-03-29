import "./_navbar.scss";

export function Navbar() {
  return (
    <nav className="navbar bg-success text-white fw-bold">
      <main className="container">
        <section className="row w-100 justify-content-between py-3">
          <article className="col-3">imagine</article>
          <article className="col-9">
            <div className="d-flex justify-content-between">
              <div>Home</div>
              <div>Feature</div>
              <div>About Us</div>
              <div>Testimonials</div>
              <div>Blog</div>
              <div>Contact</div>
            </div>
          </article>
        </section>
      </main>
    </nav>
  );
}
