import React from "react";
import Header from "./Header";
import Cities from "./Cities";
import SelectedCities from "./SelectedCities";
import "../stylesheets/App.css";

const citiesData = "./services/cities-of-china.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getCities = this.getCities.bind(this);
  }

  componentDidMount() {
    this.getCities();
  }

  getCities() {
    fetch(citiesData)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }

  render() {
    return (
      <div className="App">
        <main>
          <Header />
          <Cities />
          <SelectedCities />
        </main>
      </div>
    );
  }
}

export default App;
