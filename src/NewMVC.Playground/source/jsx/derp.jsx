var React = require('react');
var ReactDOM = require('react-dom');
import RaisedButton from 'material-ui/lib/raised-button';


var App = React.createClass({
    render: function() {
        console.log('test');
        return (<div><br /><br /><br /><br /><br /><br /><br /><br />
            <RaisedButton label="Material-UI Button" />
        </div>);
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);