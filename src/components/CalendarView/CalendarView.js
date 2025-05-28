import React from 'react';
import './CalendarView.css';

const daysOfWeek = [
  { day: 'Mon', date: 25,Time1:'10:00', Time2: '11:00',Time:'12:00'},
  { day: 'Tue', date: 26 ,Time1:'09:00', Time2: '09:00',Time:'10:00'},
  { day: 'Wed', date: 27,Time1:'12:00', Time2: '__',Time:'13:00' },
  { day: 'Thu', date: 28,Time1:'10:00', Time2: '11:00',Time:'__' },
  { day: 'Fri', date: 29,Time1:'__', Time2: '14:00',Time:'16:00' },
  { day: 'Sat', date: 30,Time1:'12:00', Time2: '14:00',Time:'15:00' },
  { day: 'Sun', date: 31,Time1:'9:00', Time2: '10:00',Time:'11:00' },
];



const appointments = [
  {
    day: 26,
    time: '09:00',
    endTime: '11:00',
    type: 'Dentist',
    doctor: 'Dr. Cameron Williamson',
    icon: '🦷',
    color: 'dark',
  },
  {
    day: 28,
    time: '11:00',
    endTime: '12:00',
    type: 'Physiotherapy Appointment',
    doctor: 'Dr. Kevin Djones',
    icon: '💪',
    color: 'light',
  },
];

const upcomingSchedule = [
  { day: 'On Thursday', title: 'Health checkup complete', time: '11:00', icon: '🩺' },
  { day: 'On Thursday', title: 'Ophthalmologist', time: '14:00', icon: '👁️' },
  { day: 'On Saturday', title: 'Cardiologist', time: '12:00', icon: '❤️' },
  { day: 'On Saturday', title: 'Neurologist', time: '16:00', icon: '🧠' },
];

const CalendarView = () => {
  return (
    <section className="calendar-container">
      <div className="calendar-header">
        <h3>October 2021</h3>
        <div className="calendar-nav">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="calendar-row calendar-days">
          {daysOfWeek.map((day, idx) => (
            <div key={idx} className="calendar-cell">
              <div className="day-name">{day.day}</div>
              <div className="day-date">{day.date}</div>
              <div className="Times">
               <div>{day.Time1}</div> 
               <div>{day.Time2}</div> 
               <div>{day.Time}</div> 
              </div>
              
            </div>
          ))}
        </div>


        <div className="calendar-row calendar-appointments">
          {appointments.map((app, i) => {
            const index = daysOfWeek.findIndex(d => d.date === app.day);
            return (
              <div
                key={i}
                className={`appointment-tag ${app.color}`}
                style={{ gridColumnStart: index + 1 }}
              >
                <div>{app.type}</div>
                <div className='dr'>
                  <div className="time">{app.time} - {app.endTime}</div>
                  <div className="doctor">{app.doctor}</div>
                  
                </div>
                
              </div>
            );
          })}
        </div>
      </div>

      <div className="upcoming-schedule">
        <h4>The Upcoming Schedule</h4>
        <div className='schedule-header' >
          {upcomingSchedule.map((item, i) => (
          <div key={i} className="schedule-day">
            <p className="day">{item.day}</p>
            <div className="schedule-pill">
              <div className='Schedule-content'> 
                <span className='schedule-icon'>{item.title}{item.icon}</span> 
               <span className="time">{item.time}</span>
               </div> 
            </div>
          </div>
        ))}

        </div>
        
      </div>
    </section>
  );
};

export default CalendarView;
