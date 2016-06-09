var React = require('react'),
	LocationItem = require('./LocationItem');

module.exports = React.createClass({

	getInitialState() {
		var locationsState = [
			"Local 1",
			"Local 2",
			"Local 3",
			"Local 4",
			"Local 5"
		]
		return { locationsState : locationsState }
	},
	render() {

		var locations = null, index = 0;

		locations = this.state.locationsState.map(function(l) {

			return (<LocationItem key={index++} address={l} />);
		});

		return (
			<div>
				{locations}
			</div>
		);
	}
});
