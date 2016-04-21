var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('react-toolbox/lib/button');

 
var App = React.createClass({
    render: function() {
        return (<div><Button label="Hello world" raised accent /></div>);
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
 
