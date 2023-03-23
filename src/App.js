import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {name:'Bachu', job:"Musician"};
const singers = [
  {name:'Bachu', job:"Musician"},
  {name:'Shuvro', job:"Musician"},
  {name:'Mizan', job:"Musician"}
];

const singerStyle = {
  color: 'purple',
  backgroundColor: 'cyan'
};

function App() {
  const nayoks = ['Rubel', 'BappaRaaz', 'Kuber', 'Razzak']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
            <h3>Hello Dude. React. How are you</h3>
        </div>
        <div className="music">
          <p>Name: {number}</p>
          <p style={singerStyle}>Name: {singer.name}</p>
          <p style={{color: 'blue', backgroundColor: 'coral'}}>Job: {singer.job}</p>
        </div>
        <Person></Person>
        <Person name={nayoks[0]} nayika="Mousumi"></Person>
        <Person name="BappaRaaz"></Person>
        <Friend></Friend>
        
      </header>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Profession: {props.job}</p>
  </div>
  )
}

function Friend(props){
  console.log(props)
  return(
    <div className="container">
      <h3>Name: Ajay</h3>
      <p>Job: Hero</p>
    </div>
  )
}

export default App;
