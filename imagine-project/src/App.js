import { About } from "./components/about/about";
import { Blog } from "./components/blog/blog";
import { Contact } from "./components/contact/contact";
import { Feature } from "./components/feature/feature";
import { Footer } from "./components/footer/footer";
import { Home } from "./components/home/home";
import { Navbar } from "./components/navbar/navbar";
import { Testimonials } from "./components/testimonials/testimonials";

const data = {
  name: "xxx",
  age: 20,
};
export const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Feature />
      <About data={data} />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};
