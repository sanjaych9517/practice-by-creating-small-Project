import Navbar from "./component/headerNavigation/navbar";
import Hero from "./component/heroSection/Hero";
import Card from "./component/featuresSection/Card"; 
import Cards from "./component/coureseSection/Cards"
import About from "./component/aboutSection/About";

function App() {
  return (
    <>
      <Navbar />
<hr />
      <Hero />
<hr />
{/* fetures dection card */}
      <Card /> 
<hr />
{/* course section card */}
<Cards />
<hr />
<About />

    </>
  );
}

export default App;
