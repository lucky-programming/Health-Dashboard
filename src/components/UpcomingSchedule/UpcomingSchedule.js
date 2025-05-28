// import React from 'react';
// import './UpcomingSchedule.css';
// import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';

// const upcomingSchedule = [
//   {
//     day: "On Thursday",
//     appointments: [
//       { title: "Health checkup complete", time: "09:00", icon: "check-circle" },
//       { title: "Ophthalmologist", time: "11:00", icon: "eye" }
//     ]
//   },
//   {
//     day: "On Saturday",
//     appointments: [
//       { title: "Cardiologist", time: "13:00", icon: "heart" },
//       { title: "Neurologist", time: "15:00", icon: "activity" }
//     ]
//   }
// ];

// const UpcomingSchedule = () => (
//   <section className="upcoming-section">
//     <h3 className="upcoming-title">The Upcoming Schedule</h3>
//     {upcomingSchedule.map(day => (
//       <div className="upcoming-day-group" key={day.day}>
//         <div className="upcoming-day">{day.day}</div>
//         <div className="upcoming-cards">
//           {day.appointments.map((appt, idx) => (
//             <SimpleAppointmentCard key={idx} {...appt} />
//           ))}
//         </div>
//       </div>
//     ))}
//   </section>
// );

// export default UpcomingSchedule;
