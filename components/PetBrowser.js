const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  isAdopted(petId) {
    this.props.adoptedPets.includes(petId);
  }
  render() {
    const pets = this.props.pets.map((pet, index) => (<Pet pet={pet} key={index} onAdoptPet={this.props.onAdoptPet} isAdopted={this.isAdopted(pet.id)} />)
      );
      
    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

PetBrowser.defaultProps = {
  adoptedPets: []
}

module.exports = PetBrowser;
