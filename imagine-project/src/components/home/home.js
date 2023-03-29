import "./_home.scss";

export const Home = () => {
  return (
    <main className="home">
      <div className="container py-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-5">
            <h1 className="title">Make Your Business More Profitable</h1>
            <p className="sub-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam assumenda ea quo cupiditate facere deleniti fuga
              officia.
            </p>
            <div className="btn btn-primary">Get Started</div>
          </div>
          <div className="col">
            <img
              src="https://preview.colorlib.com/theme/imagine/images/undraw_investing_7u74.svg"
              alt="img"
              width="100%"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
