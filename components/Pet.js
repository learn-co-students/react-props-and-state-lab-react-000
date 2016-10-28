const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
    this.onAdoptPet = this.onAdoptPet.bind(this);
  }

  onAdoptPet() {
    this.props.onAdoptPet(this.props.pet.id);
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.pet.name} (gender: {this.props.pet.gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
         if (this.props.isAdopted) {
          <button className="ui disabled button">Already adopted</button>
         } else {
          <button onClick={this.onAdoptPet} className="ui primary button">Adopt pet</button>
         } 
        </div>
      </div>
    );
  }
}

Pet.propTypes = {
  pet: React.PropTypes.shape({
    name: React.PropTypes.string,
    type: React.PropTypes.string,
    age: React.PropTypes.number,
    weight: React.PropTypes.number,
    gender: React.PropTypes.string
  })
}

module.exports = Pet;
