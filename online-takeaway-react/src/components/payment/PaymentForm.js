import React, {Component} from 'react';

class PaymentForm extends Component {

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
  }

  render() {
    return(
      <form className="padding">
        <div class="row">
          <div>
            <h3>Billing Address</h3>
            <div className="flex-component">
            <div className="flex-labels">
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            </div>
            <div className="flex-inputs">
            <input type="text" id="fname" name="firstname" placeholder="Name"/>
            <input type="text" id="email" name="email" placeholder="john@example.com"/>
            <input type="text" id="adr" name="address" placeholder="Address"/>
            <input type="text" id="city" name="city" placeholder="City"/>
            </div>
            </div>
          </div>

          <h3>Payment</h3>
          <div className="flex-component">
          <div class="flex-labels">
          <label for="cname">Name on Card</label>
          <label for="ccnum">Card number</label>
          <label for="expmonth">Expiry Date</label>
          <label for="cvv">CVV</label>
          </div>
          <div class="flex-inputs">
          <input type="text" id="cname" name="cardname" placeholder="Name"/>
          <input type="text" id="ccnum" name="cardnumber" placeholder="xxxx-xxxx-xxxx-xxxx"/>
          <input type="text" id="expmonth" name="expmonth" placeholder="xx-xxxx"/>
          <input type="text" id="cvv" name="cvv" placeholder="xxx"/>
          </div>
          </div>
        </div>
        <br/>
        <label>
          <input type="checkbox" checked="checked"/> Shipping address same as billing
        </label>
        <h3>Total amount: £{JSON.parse(localStorage.getItem('savedTotal'))}</h3>
        <input type="submit" value="Submit Order" class="btn"/>
      </form>
    )
  }
}

export default PaymentForm;
