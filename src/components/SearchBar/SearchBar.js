import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render () {
    return (
      <div className="SearchBar">
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;