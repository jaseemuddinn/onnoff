import React from "react";
import Landing from "../../components/Landing/Landing";
import TrippyScroll from "../../components/Scroll/Scroll";
import Services from "../../components/Services/Services";
import Contact from "../../components/Contact/Contact";

function Home() {
  return (
    <div>
      <Landing />
      <TrippyScroll />
      <Services />
      <Contact />
    </div>
  );
}

export default Home;
