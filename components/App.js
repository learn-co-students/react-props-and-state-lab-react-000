const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

const myPets = [
  {
    "id": "5c142d9e-ea45-4231-8146-cccf71c704c0",
    "type": "dog",
    "gender": "male",
    "age": 4,
    "weight": 1,
    "name": "Trident"
  },
  {
    "id": "2c902312-dfa3-446f-8b4b-5e115170d807",
    "type": "cat",
    "gender": "male",
    "age": 3,
    "weight": 1,
    "name": "Teddy"
  }
]

const adoptedPets = [
  {
    "id": "2c902312-dfa3-446f-8b4b-5e115170d807",
    "type": "cat",
    "gender": "male",
    "age": 3,
    "weight": 1,
    "name": "Teddy"
  }
]

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
