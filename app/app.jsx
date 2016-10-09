var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Editor = require('Editor');
var Nav = require('Nav');

//Load Foundation
$(document).foundation();

//Load css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<div>
	<Nav />
	<Editor />
	</div>,
	document.getElementById('app')
	);
