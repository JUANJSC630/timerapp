import React from 'react'
import ReactDOM from 'react-dom/client'
import { Clock } from './Components/Clock'
// import { tick } from './Components/Interval'
import './Styles/StylesClock.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Clock/>
//   </React.StrictMode>
// )


const root =  ReactDOM.createRoot(document.getElementById('root'));

const interval = ()  => {
  const element = (
    <React.StrictMode>
    <Clock/>
    </React.StrictMode>
  );
  root.render(element);
}

setInterval(interval, 1000);

