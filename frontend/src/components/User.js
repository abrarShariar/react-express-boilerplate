import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserDetails } from '../actions/userDetailsAction';

class User extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: []
    };
    this.setUserDetails = this.setUserDetails.bind(this);
  }

  async componentWillMount() {
    const res = await fetch('/api/users');
    const json = await res.json();
    console.log(json);
    this.setState({
      users: json
    });
  }

 setUserDetails(x) {
   this.props.setUserDetails(x);
 }

  render() {
    return (
      <div className="User">
        {this.state.users.map(x => {
          return (
            <ul key={x.id}>
              <li>
                  <button onClick={() => this.setUserDetails(x)}>{x.name}</button>
              </li>
            </ul>
        );
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  setUserDetails: (user) => dispatch(setUserDetails(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
