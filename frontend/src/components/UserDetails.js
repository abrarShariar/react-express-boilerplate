import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="userDetails">
          <h2>User Details</h2>
          <h3>ID: {this.props.id}</h3>
          <h3>Name: {this.props.name}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.userReducer.id,
    name: state.userReducer.name
  }
}

export default connect(mapStateToProps)(UserDetails);
