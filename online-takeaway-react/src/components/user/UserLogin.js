import React, {Component} from 'react';
import Request from '../../helpers/request';

class UserLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: ""
      },
      returnedUser: 0,
      loginSuccessful: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.checkLoginStatus = this.checkLoginStatus.bind(this);
  }
  componentDidMount(){
    if (this.props.user) {
      this.setState({user: {...this.props.user}})
    }
    // if () {
    //   this.props.loginHandler()
    // }
  }

  handleChange(event) {
    let propertyName = event.target.name;
    let user = this.state.user
    user[propertyName] = event.target.value;
    this.setState({user: user})
  }

  checkLoginStatus(){
      if (this.state.returnedUser) {
        this.props.loginHandler()
        // this.setState({
        //   loginSuccessful: true
        // })}
      }
        console.log(this.state.loginSuccessful);
      }

  handleLogin(event) {
    event.preventDefault();
    // make fetch request
    const payload = {
        email: this.state.user.email,
        password: this.state.user.password
    }

    const request = new Request();
    const userLoginPromise = request.post('/menu', payload)

    Promise.all([userLoginPromise])
    .then(data => this.setState({
      returnedUser: data[0][0]
    }, () => this.checkLoginStatus()))
}

  render() {
    return(
      <div className="padding">
        <h3>Enter your login details</h3>
        <form onSubmit={this.handleLogin}>
        <input type="text" placeholder="Email" name="email" onChange={this.handleChange}
          value = {this.state.user.email}/>
        <input type="password" placeholder="Password" name="password" onChange={this.handleChange}
          value = {this.state.user.password}/>
        <button type="submit">Login</button>
        </form>
        <br/>
        <a href="http://localhost:3000/users/new">Click here to register a new account</a>
      </div>
    )
  }
}

export default UserLogin;
