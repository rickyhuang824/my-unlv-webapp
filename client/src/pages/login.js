import React, { Component } from 'react';
import './login.css';
import BG_IMG from '../assets/login-background.jpg'
import UNLV_IMG from '../assets/unlv_logo.png'
import The_60_IMG from '../assets/60th-logo.jpg'
import Axios from 'axios'
import {Helmet} from "react-helmet";

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
          this.props.history.push('/schedule', {user: result.data})
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
      <div className="row no-gutters" style={{height: '100vh'}}>
        <Helmet>
          <title>myUNLV</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className= 'col-md-3 col-sm-12' style={{background: 'red', height:'100vh'}}
        >    
          <div className='media'>
            <img 
              className='align-self-center rounded'
              src={UNLV_IMG} 
              style={{width:'100%'}} 
              alt='UNLV' 
            />
          </div>  
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
            <p>
              <a href="https://my.unlv.nevada.edu/psp/lvporprd/EMPLOYEE/HRMS/c/MAINTAIN_SECURITY.EMAIL_PSWD.GBL?Page=EMAIL_PSWD"
                 style={{color: 'black'}}
                >
                Forget NSHE or Password ?
              </a>
            </p> 
          </form> 
        </div>
        <div 
          className= 'col-md-9 d-none d-sm-flex' style={{background: 'black', height: '100vh'}}
        >
          <img className='align-self-center' src={BG_IMG} style={{width:'100%', height:'100%'}} />
        </div>
      </div>
        

    );
  }
}

export default Login;
