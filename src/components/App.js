import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import './App.css';
import CountriesList from './countrieslist/CountriesList';
import CountryDetail from './countrydetails/CountryDetails';

class App extends React.Component {
  state = {
    countries: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      //isso vai conter o objeto de resposta do HTTP, por isso o response
      const response = await axios.get(
        'https://countries.tech-savvy.tech/countries'
      );

      console.log(response);

      this.setState({ countries: [...response], loading: false });
    } catch (err) {
      //para saber em que linha está o erro
      console.log(err);
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
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
                {this.state.loading ? (
                  <div className="spinner-grow text-info" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <CountriesList countries={this.state.countries} />
                )}
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
