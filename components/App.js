const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

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

        this.fetchPets = this.fetchPets.bind(this);
        this.handleChangeFilterType = this.handleChangeFilterType.bind(this);
        this.handleAdoptingPet = this.handleAdoptingPet.bind(this)
    }

    fetchPets() {
        let url = '/api/pets'

        if (this.state.filters.type !== 'all') {
            url += `?type=${this.state.filters.type}`
        }

        fetch(url)
            .then(res => res.json())
            .then(pets => this.setState({ pets },() => console.log(this.state.pets)))
    }

    handleAdoptingPet(petId) {
        this.setState({
            adoptedPets: [
                ...this.state.adoptedPets,
                petId,
            ]
        })
    }

    handleChangeFilterType(type) {
        this.setState({
            filters: Object.assign({}, this.state.filters, {
                type: type,
            })
        })
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
                                filters={this.state.filters}
                                onChangeType={this.handleChangeFilterType}
                                onFindPetsClick={this.fetchPets}
                            />
                        </div>
                        <div className="twelve wide column">
                            <PetBrowser
                                pets={this.state.pets}
                                adoptedPets={this.state.adoptedPets}
                                onAdoptPet={this.handleAdoptingPet}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = App;
