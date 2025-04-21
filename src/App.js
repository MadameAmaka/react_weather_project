import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
    <div className="Weather">
     <Weather defaultCity="New York" />
     <footer> This project was coded by <a href='https://github.com/MadameAmaka' target='_blank' rel="noreferrer"> Amaka Onwuli </a> and is open-sourced <a href='https://github.com/MadameAmaka/react_weather_project' target='_blank' rel="noreferrer" > on Github. 
    </a></footer>
    </div></div>
  );
}
