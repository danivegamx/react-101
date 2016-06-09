var React = require('react');

// Modo 1
module.exports = React.createClass({
	getInitialState() {
		return { myString: "" }
	},
	componentWillMount() {
		var message = this.props.message;
		this.setState({myString: message});
	},
	render() {
		return (
			<div onClick={this._concatItos}>{this.state.myString}</div>
		);
	},
	componentDidMount() {
		var extra = this.state.myString;
		extra += " - ";
		this.setState({myString: extra});
	},
	_concatItos(e) {
		var newString = this.state.myString += " itos"
		this.setState({myString : newString});
	}
});
