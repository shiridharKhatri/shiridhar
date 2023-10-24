
import BelowButton from "./components/BelowButton";
import Head from 'next/head';
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mail from "./components/Mail";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import BlogsHighlight from "./components/BlogsHighlight";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
export default function Home() {
  return (
    <>
      
<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Nav position="fixed" />
      <Header/>
      <BelowButton/>
      <Projects/>
      <Expertise/>
      <BlogsHighlight/>
      <Services/>
      <Testimonial/>
      <Mail/>
      <Footer/>
    </>
  )
}
