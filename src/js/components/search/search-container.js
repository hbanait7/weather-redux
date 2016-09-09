import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingWeather } from '../../actions/weather-actions.js';
import { fetchingLongterm } from '../../actions/longterm-actions.js';

class Search extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      text: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(fetchingWeather(this.state.text));
    this.props.dispatch(fetchingLongterm(this.state.text));
  }

  render() {

    const inputStyle = {
      regular: {
        width: '50%',
        margin: '0px auto'
      },
      lessThanMedium: {
        width: '100%',
        margin: '0px auto'
      }
    };

    return (
      <div>
        <form style=
          {
            this.props.browser.mediaType === "extraSmall"
            ? inputStyle.lessThanMedium
            : inputStyle.regular
          }  
          className="form-search form-inline"
          onSubmit={this.onSubmit}
        >
          <div className="input-group">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search..." 
              onChange={this.onChange}
              value={this.state.text}
            />
            <span className="input-group-btn">
              <button 
                type="submit" 
                className="btn btn-primary"
              > 
              Search
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    browser: state.browser
  };
}

export default connect(mapStateToProps)(Search);


