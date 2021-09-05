import "./styles/app.css"
import Header from "./components/Header"
import Newsletter from "./components/Newsletter";
import Calc from "./components/Calc";
import Employees from "./components/Employees";
import Hero from "./components/Hero";

function App() {
  return (
    <section id="container">
      <Header />
      <Hero />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 210">
        <path fill="#151b24" fill-opacity="1" d="M0,0L48,10.7C96,21,192,43,288,74.7C384,107,480,149,576,144C672,139,768,85,864,85.3C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <Newsletter />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
        <path fill="#151b24" fill-opacity="1" d="M0,160L48,138.7C96,117,192,75,288,90.7C384,107,480,181,576,202.7C672,224,768,192,864,170.7C960,149,1056,139,1152,138.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <Employees />
      <Calc />
    </section>
  );
}

export default App;
