import React, {Component} from 'react';

class UserLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    if (this.props.user) {
      this.setState({user: {... this.props.user}})
    }
  }

  handleChange(event) {
    let propertyName = event.target.name;
    let user = this.state.user
    user[propertyName] = event.target.value;
    this.setState({user: user})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onCreate(this.state.user);
  }

  render() {
    return(
      <div>
        <h3>Enter your login details</h3>
        <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Email" name="email" onChange={this.handleChange}
          value = {this.state.user.email}/>
        <input type="text" placeholder="Password" name="password" onChange={this.handleChange}
          value = {this.state.user.password}/>
        <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default UserLogin;
