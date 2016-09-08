import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {

  constructor(props) {
    super(props);
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
        >
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search..." />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary"> Search</button>
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


