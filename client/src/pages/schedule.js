import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import Moment from 'moment'


import Logo from '../assets/Schedule_logo.png'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './schedule.css'

BigCalendar.momentLocalizer(Moment)

const event_list = [
  {
    'title': 'CS420',
    'start': Moment().add(2.30, 'hours').toDate(),
    'end': Moment().add(3.45, 'hours').toDate()
  }
]

class Schedule extends Component {
  render() {
    console.log(event_list)
    return(
      <div>
        <nav className='navbar navbar-bg navbar-expand-md'>
          <a className='navbar-brand' href='#'>
            <img 
              src={Logo}
              width='60'
              height='60'
              className='d0inline-block align-top' alt='logo'
            />
          </a> 
          <div className='navbar-nav'>
            <a className='nav-link' href='#'>Acadamic</a>
            <a className='nav-link' href='#'>Finance</a>
            <a className='nav-link' href='#'>Search for class</a>
          </div>
        </nav>

        <div>
          <BigCalendar
            events={event_list}
          />
        </div>       
      </div>
    )
  }
}

export default Schedule