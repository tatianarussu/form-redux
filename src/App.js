import React, {Component} from 'react';
import './App.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateUser } from './actions/user-actions'

class App extends Component {
  constructor(props) {
    super(props)

    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  onUpdateUser(event) {
    this.props.onUpdateUser(event.target.value)
  }

  render() {
    return (
      <div className="app">
        <p className="title">Register with us</p>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="First Name" aria-label="firstname"
                 aria-describedby="basic-addon1" onChange={this.onUpdateUser}/>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Last Name" aria-label="lastname"
                 aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <select className="custom-select" id="inputGroupSelect01">
            <option selected>Country you are living in now</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Email Address" aria-label="Username"
                 aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password - minimum 8 characters"
                 aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Please confirm password" aria-label="Username"
                 aria-describedby="basic-addon1"/>
        </div>
        <p className="footer">Terms and Conditions</p>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
          <label className="form-check-label" htmlFor="exampleRadios1"> I agree with terms and conditions</label>
        </div>
        <div className="divButton">
          <button type="button" className="button">Register Free</button>
        </div>


        {/*<input onChange={this.onUpdateUser}/>*/}
        {/*{this.props.user}*/}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log('state', state)
  return {
    products: state.products,
    user: state.user,
    userPlusProps: `${state.user} ${props.aRandomProps}`
  }
}

const mapActionsToProps = (dispatch, props) => {
  console.log('props', props)

  return bindActionCreators({
    onUpdateUser: updateUser
  }, dispatch)
}

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log("propsFromState",propsFromState  )
//   console.log("propsFromDispatch",propsFromDispatch)
//   console.log("ownProps",ownProps)
//   return {}
// }


export default connect(mapStateToProps, mapActionsToProps)(App);
