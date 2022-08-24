import React from 'react'
import ReactDOM from 'react-dom/client'
import { Clock } from './Components/Clock'
import { Home } from './Components/Home'
import { Foother } from './Components/Foother';
// import { tick } from './Components/Interval'
import './Styles/StylesClock.css'
import './Styles/StylesClockdigital.css'
import './Styles/StylesFoother.css'
import './Styles/StylesHome.css'
import './Styles/Movil/StylesFootherMovil.css'
import './Styles/Movil/StylesClockMovil.css'
import './Styles/Movil/StylesClockdigitalMovil.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Foother/>
//   </React.StrictMode>
// )


const root =  ReactDOM.createRoot(document.getElementById('root'));

const interval = ()  => {
  const element = (
    <React.StrictMode>
      <Home/>
    </React.StrictMode>
  );
  root.render(element);
}

setInterval(interval, 1000);

