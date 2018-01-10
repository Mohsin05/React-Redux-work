var React = require('react/addons');
var Router = require('react-router');

var Header = React.createClass({
	render: function() {
		return (
			<div className="page-header">
				<h1>My React Project</h1>
			</div>
		);
	}
});

var PageNav = React.createClass({
	render: function() {
		return (
			<nav className="primary-nav">
				<Router.Link to="home" className="primary-nav__brand" title="Home">
				</Router.Link>
				{/*<Router.Link to="home">Home</Router.Link>*/}
				<Router.Link className="primary-nav__item" to="buttons">Buttons</Router.Link>
				<Router.Link className="primary-nav__item" to="buttons">Forms</Router.Link>
				<Router.Link className="primary-nav__item" to="tables">Tables</Router.Link>

				<Router.Link className="primary-nav__item" to="spinner">Spinner</Router.Link>
				<Router.Link className="primary-nav__item" to="modal">Modal</Router.Link>
				<Router.Link className="primary-nav__item" to="grid">Grid</Router.Link>
				<Router.Link className="primary-nav__item" to="date-picker">Date Picker</Router.Link>

			</nav>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="page-wrapper">
				<PageNav />
				<div className="page-body">
					<Router.RouteHandler/>
				</div>
				<div className="page-footer">
					{/*<div className="page-container">
						created with <span className="page-footer__icon">&hearts;</span> by <a href="https://twitter.com/jedwatson" target="_blank">@jedwatson</a> and <a href="https://twitter.com/jossmackison" target="_blank">@jossmackison</a>
					</div>*/}
					<div className="page-container">
						<h2>This is the Footer</h2>
					</div>
				</div>
			</div>
		);
	}
});

var routes = (
	<Router.Route name="app" path="/" handler={App}>
		<Router.Route name="home" path="/" handler={require('../routes/Home')} />')} />
		<Router.Route name="buttons" path="/buttons" handler={require('../routes/Buttons')} />
		<Router.Route name="tables" path="/tables" handler={require('../routes/Tables')} />
		<Router.Route name="forms" path="/forms" handler={require('../routes/Forms')} />
		<Router.Route name="spinner" path="/spinner" handler={require('../routes/Spinner')} />
		<Router.Route name="modal" path="/modal" handler={require('../routes/Modal')} />
		<Router.Route name="grid" path="/grid" handler={require('../routes/Grid')} />
		<Router.Route name="date-picker" path="/date-picker" handler={require('../routes/DatePicker')} />
		<Router.DefaultRoute handler={require('../routes/Home')} />
	</Router.Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler/>, document.body);
});
