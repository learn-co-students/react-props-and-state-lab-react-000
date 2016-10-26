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

    this.onChangeType = this.onChangeType.bind(this);
    this.onFindPetsClick = this.onFindPetsClick.bind(this);
    this.onAdoptPet = this.onAdoptPet.bind(this);

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onChangeType(newType){
    this.setState(Object.assign(
      {},
      this.state,
      {filters:{type: newType}}
    ))
  }
  
  onFindPetsClick(){
    let url = this.state.filters.type == 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`
    fetch(url).then(res => res.json().then(jsonRes => this.setState(Object.assign(
      {},
      this.state,
      {pets: jsonRes}
    ))))
  }
  
  onAdoptPet(petId){
    this.setState(Object.assign({}, this.state, {adoptedPets: this.state.adoptedPets.concat([petId]) }))
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
              <Filters 
                filters={this.state.filters} onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
              adoptedPets={this.state.adoptedPets}
              onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
