import React, {Component} from 'react';
import './App.css';

import { connect } from 'react-redux'
import { onUpdateUser } from './actions/user-actions'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isChecked: false
    }
  }

  handleIsChecked = () => {
    this.setState({
      isChecked: true
    })
  }


  handleChangeFirstName = (e) => {
    const { name, value } = e.target
    this.props.onUpdateUser(name,value)
  }


  handleSubmit = () => {
    this.props.onUpdateUser()
    const user = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      email: this.props.email,
      password: this.props.password,
      confirmPassword: this.props.confirmPassword,
    }
    localStorage.setItem('user', JSON.stringify(user));
    alert("Confirm register")
  }

  render() {
    const { isChecked } = this.state
    return (
      <div className="app">
        <p className="title">Register with us</p>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="First Name" aria-label="firstname" name="firstName"
                 aria-describedby="basic-addon1" onChange={this.handleChangeFirstName}/>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Last Name" aria-label="lastname" name="lastName"
                 aria-describedby="basic-addon1"  onChange={this.handleChangeFirstName} />
        </div>
        <div className="input-group mb-3">
          <select className="custom-select" id="inputGroupSelect01">
            <option >Country you are living in now</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Email Address" aria-label="Username" name="email"
                 aria-describedby="basic-addon1" onChange={this.handleChangeFirstName}/>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password - minimum 8 characters" name="password"
                 aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleChangeFirstName}/>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Please confirm password" aria-label="Username" name="confirmPassword"
                 aria-describedby="basic-addon1" onChange={this.handleChangeFirstName}/>
        </div>
        <p className="footer">Terms and Conditions</p>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" onChange={this.handleIsChecked} />
          <label className="form-check-label" htmlFor="exampleRadios1"> I agree with terms and conditions</label>
        </div>
        <div className="divButton">
          <button type="button" className="button" disabled={isChecked === false} onClick={this.handleSubmit}> Register Free</button>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    password: state.password,
    confirmPassword: state.confirmPassword
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUser: (name, value) => dispatch(onUpdateUser(name, value)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
