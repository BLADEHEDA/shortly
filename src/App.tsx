import "./App.css";
import Boost from "./components/boost/Boost";
import Footer from "./components/footer/Footer";
import FormBar from "./components/form-bar/FormBar";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Statistics from "./components/statistics/Statistics";

function App() {
  return (
    <>
      <div className="navTop">
        <NavBar />
        <Hero />
      </div>
      <div className="navBottom">
        <FormBar />
        <Statistics />
      </div>
      <Boost />
      <Footer/>
    </>
  );
}

export default App;
