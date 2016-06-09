var React = require('react'),
	ReactDOM = require('react-dom'),
	App = require('./components/App.js');

	/*
	* arg1 -> Contenedor principal (JSX) App.js
	* arg2 -> Donde?
	*/
	ReactDOM.render(<App message="Hello World!" />, document.getElementById('react-container'));
