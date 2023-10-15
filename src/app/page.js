import BelowButton from "./components/BelowButton";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mail from "./components/Mail";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main>
      <Nav position="fixed" />
      <Header/>
      <BelowButton/>
      <Projects/>
      <Expertise/>
      <Blogs/>
      <Services/>
      <Testimonial/>
      <Mail/>
      <Footer/>
    </main>
  )
}
