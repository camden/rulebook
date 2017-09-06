// @flow

import React, { Component } from 'react';
import DebounceInput from 'react-debounce-input';
import { Link } from 'react-router-dom';

import { searchByTitle } from 'utils';

class Search extends Component {
  state: {
    searchLoading: boolean,
    searchText: string,
    searchResults: Array<{ title: string }>,
  };

  handleSearchChange: Function;
  search: Function;

  constructor(props) {
    super(props);
    this.state = {
      searchLoading: false,
      searchText: '',
      searchResults: [],
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      searchLoading: true,
    });
    this.search(event.target.value);
  }

  async search(query: string) {
    let searchResults = [];
    if (query !== '') {
      searchResults = await searchByTitle({ query });
    }

    this.setState({
      searchResults,
      searchLoading: false,
    });
  }

  searchResult(result: string) {
    return (
      <Link to={`/rules/${result}`}>
        {result}
      </Link>
    );
  }

  searchResultList() {
    return (
      <div>
        {this.state.searchResults.map(result => {
          return (
            <div key={result.title}>
              {this.searchResult(result.title)}
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>Search</div>
        <DebounceInput
          debounceTimeout={500}
          onChange={this.handleSearchChange}
        />
        <div>
          {this.searchResultList()}
        </div>
      </div>
    );
  }
}

export default Search;
