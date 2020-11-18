import React from 'react';
import { Link } from 'react-router-dom';

class CountryDetail extends React.Component {
  state = {
    name: '',
    capital: '',
    area: 0,
    borders: [],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.cca3 !== this.props.match.params.cca3) {
      const foundCountry = this.props.countries.find((country) => {
        return country.cca3 === this.props.match.params.cca3;
      });

      if (foundCountry) {
        this.setState({
          name: foundCountry.name.common,
          capital: foundCountry.capital,
          area: foundCountry.area,
          borders: foundCountry.borders,
        });
      }
    }
  }

  renderBorderName = (cca3) => {
    const foundCountry = this.props.countries.find((country) => {
      return country.cca3 === cca3;
    });

    if (foundCountry) {
      return foundCountry.name.common;
    } else {
      return `NAME NOT FOUND`;
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{this.state.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.state.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.state.borders.map((border, idx) => (
                    <li key={idx}>
                      <Link to={border}>{this.renderBorderName(border)}</Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;
