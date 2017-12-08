// required if you want to render any JSX
import React, { Component } from 'react';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);

    state = { term: '' };
  // }

  render() {
    return (
      <div className="search-bar">
        <input
          // create a controlled input by telling the input field to get its value from state; this allows the input box to display what's being typed by the user. 
          value={this.state.term}
          // this event tells state to update itself with the target value coming from the input field
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>

    );
  }

}

export default SearchBar;
