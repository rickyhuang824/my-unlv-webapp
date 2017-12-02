import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import Moment from 'moment'


import Logo from '../assets/Schedule_logo.png'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './schedule.css'
import {Helmet} from "react-helmet";

BigCalendar.momentLocalizer(Moment)

// const event_list = [
//   {
//     'title': 'CS420',
//     'start': Moment().add(2.30, 'hours').toDate(),
//     'end': Moment().add(3.45, 'hours').toDate()
//   }
// ]

class Schedule extends Component {
  render() {
    const events = this.props.location.state ? 
    this.props.location.state.user.events.map(event => 
      Object.assign(
        {}, 
        event, 
        {
          start: Moment.unix(event.start).toDate(), 
          end: Moment.unix(event.end).toDate()
        }
      )
    ) : []

    return(
    
      <div>
        <Helmet>
          <title>Schedule</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <nav className='navbar navbar-bg navbar-expand-md'>
          <a className='navbar-brand' href='/'>
            <img 
              src={Logo}
              width='60'
              height='60'
              className='d0inline-block align-top' alt='logo'
            />
          </a> 
          <div className='navbar-nav'>
            <a className='nav-link' href='static/finance_payment_page/admission.html'>ADMISSIONS</a>
            <a className='nav-link' href='static/finance_payment_page/graduate.html'>GRADUATE</a>
            <a className='nav-link' href='static/finance_payment_page/undergrad.html'>UNDERGRADUATE</a>
            <a className='nav-link' href='static/finance_payment_page/demographics.html'>DEMORGRAPHICS</a>
            <a className='nav-link' href='static/finance_payment_page/finance.html'>FINANCES</a>
            <a className='nav-link' href='static/finance_payment_page/payment.html'>PAYMENT</a>
            <a className='nav-link' href='static/finance_payment_page/search_class.html'>SEARCH CLASSES</a>
          </div>
        </nav>

        
        {/* <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group" role="group" aria-label="First group">
            <button type="button" class="btn btn-danger">Search</button>
          </div>
          <div class="btn-group" role="group" aria-label="Second group">
            <button type="button" class="btn btn-danger">Enroll</button>
          </div>
          <div class="btn-group" role="group" aria-label="Third group">
            <button type="button" class="btn btn-danger">Plan</button>
          </div>
          <div class="btn-group" role="group" aria-label="Forth group">
            <button type="button" class="btn btn-danger">Acadamic</button>
          </div>
        </div> */}
        <div>
          <BigCalendar
            events={events}
          />
        </div>       
      </div>
    )
  }
}

export default Schedule