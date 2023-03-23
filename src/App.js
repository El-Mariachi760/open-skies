
import dayBg from './assets/day.jpg'
// import nightBg from './assets/night.jpg'

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${dayBg})`}}>
      <div className="overlay">
        <div className='container'>
          <div className='section setion_inputs'>
            <input type="text" name='city' placeholder='Enter City'/>
            <button>°F</button>
          </div>
          <div className='section__temprature'>
            <div className='icon'>
              <h3>London</h3>
              <img src='https://openweathermap.org/img/wn/10d@2x.png' alt='weatherIcon' />
              <h3>Cloudy</h3>
            </div>
            <div className='temprature'>
              <h1>34°C</h1>
            </div>
            {/* bottom decription */}
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
