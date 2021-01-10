import React from 'react';
import "./App.css"
import BusinessList from "../businessList/BusinessList";
import SearchBar from "../searchBar/SearchBar";
import Yelp from "../../util/yelp";


// const business = {
//   imageSrc: './pizza.webp',
//   name: 'MarginOtto Pizzeria',
//   address: '1010 Paddington Way',
//   city: 'Flavortown',
//   state: 'NY',
//   zipCode: '10101',
//   category: 'Italian',
//   rating: 4.5,
//   reviewCount: 90

// }

// const busineses = [business, business, business, business, business, business, business];


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { businesses: [] }
    this.searchYelp = this.searchYelp.bind(this);
  }


  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy)
      .then(businesses => this.setState({ businesses: businesses }))
  }

  render() {
    return (
      <div className="App">
        <h1>Apollo Project</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList busineses={this.state.businesses} />
      </div>
    );
  }

}

export default App;