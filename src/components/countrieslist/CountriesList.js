import React from 'react';
import { NavLink } from 'react-router-dom';

function CountryList(props) {
  return (
    <div className="list-group">
      {props.countries.map((country) => (
        <NavLink
          key={country.cca3}
          className="list-group-item list-group-item-action"
          activeClassName="active"
          to={`/country/${country.cca3}`}
        >
          <span>{country.flag}</span> {country.name.common}
        </NavLink>
      ))}
    </div>
  );
}

export default CountryList;
