import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Connect from "./components/Connect";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

function App() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="App">
      <Navbar state={nav} func={handleNav} />
      <Hero state={nav} />
      <About />
      <Projects />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
