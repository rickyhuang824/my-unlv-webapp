import React, { Component } from 'react';
import './login.css';
import BG_IMG from '../assets/login-background.jpg'
import Axios from 'axios'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      nshe_id: '',
      password: '',
      err_msg: ''
    }
  }

  onUpdate = event => {
    this.setState(
      {[event.target.name]: event.target.value}
    )
  }

  onSubmit = event => {
    event.preventDefault()

    Axios
      .post('http://localhost:3030/login', {
        nshe_id: this.state.nshe_id, password: this.state.password
      })

      .then(result => {
        if (result.status === 200)
          this.props.history.push('/schedule')
      })

      .catch( () => {
        this.setState({err_msg: 'NSHE ID and Password are not matched'})
      })
    // if(this.state.nshe_id !== '100' || this.state.password !== '1234')
    //   this.setState({err_msg: 'invalid NSHE ID or Password'})
    // else
    //     this.props.history.push('/schedule')
  }
  
  
  render() {
    
    return ( 
      <div className="row no-gutters">
        <div className= 'col-md-3' style={{background: 'red', height: '100vh'}}
        >
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <input 
                value={this.state.nshe_id}
                type='text'
                className='form-control'
                placeholder='NSHE ID' 
                name='nshe_id'
                onChange={this.onUpdate}
              />
            </div>
            <div className='form-group'>        
              <input 
                value={this.state.password}
                type='password'
                className='form-control'
                placeholder='PASSWORD' 
                name='password'
                onChange={this.onUpdate}
              />
            </div> 
            {
              this.state.err_msg ? <p> {this.state.err_msg}</p> :null
            }       
            <button type='submit' className='btn btn-dark'>Sign in</button>
          </form>  
        </div>
        <div 
          className= 'col-md-9 d-flex' style={{background: 'black', height: '100vh'}}
        >
          <img className='align-self-center' src={BG_IMG} style={{width:'100%'}} />
        </div>
      </div>
        

    );
  }
}

export default Login;
