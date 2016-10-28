const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  isAdopted(pet) {
    return this.props.adoptedPets.includes(pet);
  }

  render() {
    return (
      <div className="ui cards">
        <code>&lt;Pet /&gt;</code> &nbsp;
        this.props.pets.map(the_pet => {<Pet pet={the_pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.isAdopted(the_pet)} />})
      </div>
    );
  }
}

module.exports = PetBrowser;
