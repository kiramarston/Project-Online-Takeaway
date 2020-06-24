import React, {Component} from 'react';

class UserForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        password: "",
        cardNumber: null
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    if (this.props.user) {
      this.setState({user: {...this.props.user}})
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
    this.setRedirect();
  }

  render() {
    return(
      <div>
        <h3>Create New Account</h3>
        <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="First Name" name="firstName" onChange={this.handleChange}
          value = {this.state.user.firstName}/>
        <input type="text" placeholder="Last Name" name="lastName" onChange={this.handleChange}
          value = {this.state.user.lastName}/>
        <input type="text" placeholder="Address" name="address" onChange={this.handleChange}
          value = {this.state.user.address}/>
        <input type="text" placeholder="Email" name="email" onChange={this.handleChange}
          value = {this.state.user.email}/>
        <input type="password" placeholder="Password" name="password" onChange={this.handleChange}
          value = {this.state.user.password}/>
        <button type="submit">Create Account</button>
        </form>
      </div>
    )
  }
}

export default UserForm;
