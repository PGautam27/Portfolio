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
  const [japanese, setJapanese] = useState(false);

  const changeLang = () => {
    setJapanese(!japanese);
  };

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="App">
      <Navbar
        state={nav}
        func={handleNav}
        japan={japanese}
        chLang={changeLang}
      />
      <Hero state={nav} japan={japanese} />
      <About japan={japanese} />
      <Projects japan={japanese} />
      <Connect japan={japanese} />
      <Footer japan={japanese} />
    </div>
  );
}

export default App;
