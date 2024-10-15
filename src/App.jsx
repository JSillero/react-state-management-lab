// src/App.jsx
import ZombieFigher from './components/ZombieFighter'
import { useState } from 'react';
import './App.css';



const App = () => {
  const [money, setMoney] = useState(100);
  const [totalStrenght, setTotalStrenght] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [team, setTeam] = useState([]);
  const [message, setMessage] = useState("");


  const handleAddFigher = (fighter) => {
    if (fighter.price > money) {
      return;
    }

    setMoney(money - fighter.price);
    setTeam([...team, fighter]);
    setTotalStrenght(totalStrenght + fighter.strength);
    setTotalAgility(totalAgility + fighter.agility);
  };

  const handleRemoveFigher = (index) => {
    let goneFigher = team[index];
    setMoney(money + goneFigher.price);
    setTotalStrenght(totalStrenght - goneFigher.strength);
    setTotalAgility(totalAgility - goneFigher.agility);

    team.splice(index, 1);//remove figher
  };


  const zombieFighers = [
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ];

  return (<div>
    <h1>React City</h1>
    <h3>Currently under zombie attack.</h3>
    <p>Funds: {money}</p>
    <div className='feedback'>{message}</div>
    <ul>
      {zombieFighers.map(fighter => {
        return (
          <div className="figher">
            <ZombieFigher
              key={fighter.name}
              {...fighter}
            />
            <button onClick={() => handleAddFigher(fighter)}>Add</button>

          </div>
        )
      })}
    </ul>
    <div>
      <h3>Current team</h3>
      <p>Total strength: {totalStrenght} | Total agility:{totalAgility}</p>
      {team.length == 0 ? "Pick some team members " : ""}
      <ul>
        {team.map((fighter, index) => {
          return (
            <div className="figher">
              <ZombieFigher
                key={fighter.name}
                {...fighter}
              />
              <button onClick={() => handleRemoveFigher(index)}>Remove</button>
            </div>
          )
        })}
      </ul>
    </div>

  </div>
  );
}

export default App
