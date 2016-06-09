var React = require('react');

module.exports = React.createClass({

	render() {
		return (
			<form >
				<label ></label>
				<input onChange={this._handleChange} />
			</form>
		);
	},

	_handleChange() {

	}
});
