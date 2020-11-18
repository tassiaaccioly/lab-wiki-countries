import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import countriesSrc from '../countries.json';
import HomePage from './homepage/HomePage';
import Navbar from './Navbar';
import CountriesList from './countrieslist/CountriesList';
import CountryDetail from './countrydetails/CountryDetails';

class App extends React.Component {
  state = {
    countries: [...countriesSrc],
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container">
              <a class="navbar-brand" href="/">
                WikiCountries
              </a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div
                className="col-5"
                style={{ maxHeight: '90vh', overflow: 'scroll' }}
              >
                <CountriesList countries={this.state.countries} />
              </div>
              <div className="col-7">
                <Route
                  path="/country/:cca3"
                  render={(routeProps) => {
                    return (
                      <CountryDetail
                        //routeProps são os props padrão da Route
                        {...routeProps}
                        countries={this.state.countries}
                      />
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
