import React from "react";
import Header from "./Header";
import Cities from "./Cities";
import SelectedCities from "./SelectedCities";
import "../stylesheets/App.css";

const citiesData = "./services/cities-of-china.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: []
      // items: 20,
      // loadingState: false
    };
    this.getCities = this.getCities.bind(this);
  }

  componentDidMount() {
    this.getCities();
  }

  getCities() {
    fetch(citiesData)
      .then(response => response.json())
      .then(data => {
        this.setState({ cities: data.cities });
      });
  }

  render() {
    const { cities } = this.state;
    return (
      <div className="App">
        <main>
          <Header />
          <main className="App-container">
            <Cities cities={cities} />
            <SelectedCities />
          </main>
        </main>
      </div>
    );
  }
}

export default App;
