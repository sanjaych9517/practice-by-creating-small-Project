import Navbar from "./component/headerNavigation/navbar";
import Hero from "./component/heroSection/Hero";
import Card from "./component/featuresSection/Card"; 
import Cards from "./component/coureseSection/Cards"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
{/* fetures dection card */}
      <Card /> 

{/* course section card */}
<Cards />

    </>
  );
}

export default App;
