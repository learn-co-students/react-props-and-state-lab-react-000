const React = require('react');

class Filters extends React.Component {
  constructor() {
    super();
    
    
    this.handleChange = this.props.onChangeType(this.)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" onChage={this.props.onChangeType} id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button">Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
