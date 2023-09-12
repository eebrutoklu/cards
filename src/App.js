import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap5 from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ratione placeat iste non! Pariatur maxime quam, obcaecati  debitis ut ab."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap5}
                title="Bootstrap 5"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ratione placeat iste non! Pariatur maxime quam, obcaecati  debitis ut ab."
              />
            </div>
            <div className="column">
              <Course
                image={Ccsharp}
                title="Ccsharp"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ratione placeat iste non! Pariatur maxime quam, obcaecati  debitis ut ab."
              />
            </div>
            <div className="column">
              <Course
                image={Kompleweb}
                title="Frontend"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Ratione placeat iste non! Pariatur maxime quam, obcaecati  debitis ut ab."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
