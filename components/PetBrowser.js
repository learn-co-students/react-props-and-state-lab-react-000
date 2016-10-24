const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    
    const checkAdoption = pet => {
      this.props.adoptedPets.indexOf(pet) != -1
    }
    
    const petComponents = this.props.pets.map(petObj => {
      return (
        <Pet pet={petObj} isAdopted={checkAdoption(petObj)} onAdoptPet={this.props.onAdoptPet} />
      )
    })
    return (
      <div className="ui cards">
        {petComponents}
      </div>
    );
  }
}

module.exports = PetBrowser;
