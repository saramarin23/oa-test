import React from "react";
import Header from "./Header";
import Cities from "./Cities";
import SelectedCities from "./SelectedCities";
import "../stylesheets/App.scss";

const citiesData = "./services/cities-of-china.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      favs: [],
      selectAllCities: false,
      cities: [],
      items: 20,
      loadingState: false
    };
    this.getCities = this.getCities.bind(this);
    this.getQuery = this.getQuery.bind(this);
    this.selectCity = this.selectCity.bind(this);
    this.resetFavs = this.resetFavs.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    e.persist();
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
    this.setState({
      favs: [],
      selectAllCities: false
    });
  }

  loadMoreCities() {
    this.setState({ loadingState: true });
  }

  handleChange(e, s) {
    e.persist();
    const favCities = this.state.favs;
    const allCities = [...this.state.cities];
    if (e.target.checked) {
      favCities.push(allCities);
    }
  }

  render() {
    const { cities, query, items, loadingState, favs, allChecked } = this.state;
    return (
      <div className="App">
        <main>
          <Header />
          <main className="App-container">
            <Cities
              cities={cities}
              checked={allChecked}
              selectCity={this.selectCity}
              items={items}
              loadingState={loadingState}
              query={query}
              getQuery={this.getQuery}
              handleChange={this.handleChange}
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
