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
      query: "",
      favs: [],
      selectAllCities: true,
      cities: [],
      items: 20,
      loadingState: false
    };
    this.getCities = this.getCities.bind(this);
    this.getQuery = this.getQuery.bind(this);
    this.selectCity = this.selectCity.bind(this);
    this.resetFavs = this.resetFavs.bind(this);
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

  getQuery(event) {
    const queryValue = event.currentTarget.value;
    this.setState({
      query: queryValue
    });
  }

  selectCity(e) {
    const selectedCity = e.currentTarget.value;
    if (selectedCity === "all") {
      this.setState({ favs: ["all"] });
    } else {
      if (this.state.favs.indexOf(selectedCity) > -1) {
        const index = this.state.favs.indexOf(selectedCity);
        const newFavorite = [...this.state.favs];
        newFavorite.splice(index, 1);
        this.setState({ favs: newFavorite });
      } else {
        this.setState(prevState => ({
          favs: [...prevState.favs, selectedCity]
        }));
      }
    }
  }

  resetFavs() {
    this.forceUpdate();
    this.setState({ favs: [], selectAllCities: false });
  }

  loadMoreCities() {
    this.setState({ loadingState: true });
  }

  render() {
    const {
      cities,
      query,
      items,
      loadingState,
      favs,
      selectAllCities
    } = this.state;
    return (
      <div className="App">
        <main>
          <Header />
          <main className="App-container">
            <Cities
              cities={cities}
              selectAllCities={selectAllCities}
              selectCity={this.selectCity}
              items={items}
              loadingState={loadingState}
              query={query}
              getQuery={this.getQuery}
            />
            <SelectedCities
              action={this.resetFavs}
              cities={cities}
              favs={favs}
            />
          </main>
        </main>
      </div>
    );
  }
}

export default App;
