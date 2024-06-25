import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Cover from "./components/Cover";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";
import Blogs from "./components/Blogs";
import Action from "./components/Action";
import Footer from './components/Footer';

function App() {
  const cover = {
    cover1:{
      imgSrc: "./images/Frame35.png",
      title: "The unseen of spending three years at Pixelgrade",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
    },
    cover2:{
      imgSrc: "./images/Img2.png",
      title:"How to design your site footer like we did",
      para:"Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
    }
  } 

  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Cover
        imageSrc={cover.cover1.imgSrc}
        title={cover.cover1.title}
        paragraph={cover.cover1.para}
      />
      <Features />
      <Cover
        imageSrc={cover.cover2.imgSrc}
        title={cover.cover2.title}
        paragraph={cover.cover2.para}  
      />
      <Testimonial />
      <Blogs />
      <Action />
      <Footer />
    </>
  )
}

export default App
