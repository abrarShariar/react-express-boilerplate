import React, { Component } from 'react';

export default class User extends Component {

  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  async componentWillMount(){
    const res = await fetch('/api/users');
    const json = await res.json();
    console.log(json);
    this.setState({
      users: json
    });
  }

  render() {
    return (
      <div className="User">
        {this.state.users.map(x => {
          return (
          <ul key={x.id}>
            <li>{x.id}</li>
            <li>{x.name}</li>
          </ul>
        );
        })}
      </div>
    )
  }
}
