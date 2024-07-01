import React from "react";
import Header from "./Components/Header";
import Services from "./Components/Services";
import About from "./Components/About";
import Team from "./Components/Team";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contacts";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Services />
        <About />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
