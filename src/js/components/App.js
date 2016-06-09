var React = require('react'),
	Header = require('./Header'),
	Title = require('./Title'),
	Search = require('./Search'),
	Map = require('./Map'),
	CurrentLocation = require('./CurrentLocation'),
	LocationList = require('./LocationList');


module.exports = React.createClass({

	render() {
		return (
			<main>
				<Header />
				<Title />
				<div className="row">
					<div className="small-8 columns">
						<Search />
						<Map />
					</div>
					<div className="small-4 columns">
						<CurrentLocation />
						<LocationList />
					</div>
				</div>
			</main>
		);
	}
});
