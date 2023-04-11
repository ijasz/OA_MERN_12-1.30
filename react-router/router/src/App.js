import { Route, Routes, Link, Outlet } from "react-router-dom";
import "./_app.scss";

export function App() {
  return (
    <div className="App">
      <nav>
        <Link to="">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        <Link to="courses">Courses</Link>
      </nav>

      <Routes>
        <Route path="" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/courses" Component={Courses}>
          <Route path="online" Component={Online} />
          <Route path="offline" Component={Offline} />
        </Route>
      </Routes>
    </div>
  );
}

const style = {
  height: "100vh",
  // backgroundColor: "whitesmoke",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export function Home() {
  return <div style={style}>Home</div>;
}

export function About() {
  return <div style={style}>About</div>;
}

export function Contact() {
  return <div style={style}>Contact</div>;
}

export function Courses() {
  return (
    <main className="flex-col">
      <section className="d-flex justify-content-center my-5">
        <li className="mx-2">
          <Link to="online">Online Courses</Link>
        </li>
        <li className="mx-2">
          <Link to="offline">Offline Courses</Link>
        </li>
      </section>
      <section className="my-2">
        <Outlet />
      </section>
    </main>
  );
}

export function Online() {
  return (
    <div>
      <h1>Online courses</h1>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
    </div>
  );
}

export function Offline() {
  return (
    <div>
      <h1>Offline courses</h1>
      <li>React JS</li>
      <li>React Native</li>
    </div>
  );
}
