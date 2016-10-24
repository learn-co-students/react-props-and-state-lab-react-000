const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

// const myPets = [
//   {
//     name: 'Barky',
//     gender: 'male',
//     type: 'dog',
//     age: 13,
//     weight: '150lb'
//   },
//   {
//     name: '1Barky',
//     gender: '1male',
//     type: '1dog',
//     age: 113,
//     weight: '1150lb'
//   }
// ]

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
              <Filters />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
