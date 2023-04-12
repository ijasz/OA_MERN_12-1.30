import {
  Route,
  Routes,
  Link,
  Outlet,
  NavLink,
  useParams,
} from "react-router-dom";
import "./_app.scss";

export function App() {
  return (
    <div className="App">
      <nav>
        <NavLink
          to=""
          style={({ isActive }) => {
            return {
              fontWeight: isActive && "bold",
            };
          }}
        >
          Home
        </NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="courses">Courses</NavLink>
      </nav>

      <Routes>
        <Route path="" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/courses" Component={Courses}>
          <Route path="online" Component={Online}>
            <Route path="course-details/:id" Component={CoursesDetails} />
          </Route>
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
          <NavLink to="online">Online Courses</NavLink>
        </li>
        <li className="mx-2">
          <NavLink to="offline">Offline Courses</NavLink>
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
      <section className="d-flex">
        <Link to="course-details/html" className="mx-1">
          HTML
        </Link>
        <Link to="course-details/css" className="mx-1">
          CSS
        </Link>
        <Link to="course-details/js" className="mx-1">
          JS
        </Link>
      </section>

      <Outlet />
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

const courses = [
  {
    id: "html",
    courseName: "HTML",
    courseDuration: "1hr",
    courseFee: "500",
  },
  {
    id: "css",
    courseName: "CSS",
    courseDuration: "5hr",
    courseFee: "600",
  },
  {
    id: "js",
    courseName: "JavaScript",
    courseDuration: "8hr",
    courseFee: "1000",
  },
];

export function CoursesDetails() {
  const { id } = useParams();

  return courses.map((data, i, arr) => {
    if (id === data.id)
      return (
        <div className="my-3">
          <h1>CoursesDetails {id} </h1>
          <li>courseName : {data.courseName}</li>
          <li>courseFee: {data.courseFee}</li>
          <li>courseDuration: {data.courseDuration}</li>
        </div>
      );
  });
}
