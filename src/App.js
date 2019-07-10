import React, {Component} from 'react';
import './App.css';

import { connect } from 'react-redux'
import { onUpdateUser } from './actions/user-actions'

class App extends Component {
 constructor(props) {
   super(props)

   this.state = {
     countries: []
   }
 }
  
  componentDidMount(){
    fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            countries: result.map(country => country.name)
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
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
      country: this.props.country
    }
    localStorage.setItem('user', JSON.stringify(user));
    alert("Confirm register")
  }

 getCountries =  async () => {
  const response = await fetch('https://restcountries.eu/rest/v2/all')
  const myJson = await response.json()
  const country = myJson.map(country => country.name)
  return country
 }



  render() {
    const { countries } = this.state
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
          <select className="custom-select" id="inputGroupSelect01" name="country" onChange={this.handleChangeFirstName}>
            <option >Country you are living in now</option>
            {
              countries.map((cont, index) =>{
                return <option key={index}> {cont} </option>
              })
            }
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
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
          <label className="form-check-label" htmlFor="exampleRadios1"> I agree with terms and conditions</label>
        </div>
        <div className="divButton">
          <button type="button" className="button" onClick={this.handleSubmit}>Register Free</button>
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
    confirmPassword: state.confirmPassword,
    country: state.country
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUser: (name, value) => dispatch(onUpdateUser(name, value)),
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
