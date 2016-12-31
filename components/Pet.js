const React = require('react');

class Pet extends React.Component {
    constructor() {
        super();

        this.handleAdoptingPet = this.handleAdoptingPet.bind(this)
    }

    handleAdoptingPet() {
        this.props.onAdoptPet(this.props.pet.id)
    }

    render() {
        const { pet, isAdopted } = this.props
        const { name, type, gender, age, weight } = pet

        return (
            <div className="card">
                <div className="content">
                    <a className="header">{name} (gender: {gender === 'male' ? '♂' : '♀' })</a>
                    <div className="meta">
                        <span className="date">{type}</span>
                    </div>
                    <div className="description">
                        <p>Age: {age}</p>
                        <p>Weight: {weight}</p>
                    </div>
                </div>
                <div className="extra content">
                    { !isAdopted &&
                        <button
                            className="ui primary button"
                            onClick={this.handleAdoptingPet}
                        >
                            Adopt pet
                        </button>
                    }
                    { isAdopted &&
                        <button className="ui disabled button">
                            Already adopted
                        </button>
                    }
                </div>
            </div>
        );
    }
}

Pet.propTypes = {
    pet: React.PropTypes.shape({
        age: React.PropTypes.number.isRequired,
        gender: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        weight: React.PropTypes.number.isRequired,
    }),
    onAdoptPet: React.PropTypes.func.isRequired,
    isAdopted: React.PropTypes.bool.isRequired,
}

module.exports = Pet;
