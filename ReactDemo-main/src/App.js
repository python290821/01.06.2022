import './App.css';
import HelloWorld from './HelloWorld';
import Phone from './Phone';
import RandomNumber from './RandomNumber';
import Word from './Word';
import Garage from './Garage';
import Clock from './Clock';

function App() {
  const carsList = [
    {model: 'Toyota', year: '2018', color: 'White'},
    {model: 'Mitsubishi', year: '2022', color: 'Black'},
    {model: 'Volkswagen', year: '2012', color: 'Green'},
  ]
  return (
    <div>
      <HelloWorld/>
      <RandomNumber/>
      <Word word1='Moshe' word2='Boris' />
      <Phone phoneNumber='0541234657' />
      <Garage carsList={carsList} />
      <Clock />
    </div>
  );
}

export default App;
