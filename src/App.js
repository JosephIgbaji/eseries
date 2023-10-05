import "./styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CloudSoftSection from "./components/CloudSoftSection";
import WhatSection from "./components/WhatSection";
import Feaures from "./components/Feaures";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <CloudSoftSection />
      <WhatSection />
      <Feaures />
    </div>
  );
}

export default App;
