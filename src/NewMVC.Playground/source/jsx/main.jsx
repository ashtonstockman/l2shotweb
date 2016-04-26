var React = require('react');
var ReactDOM = require('react-dom');
import Button from 'react-toolbox/lib/button';

var App = React.createClass({
    render: function() {
        return (<div>
            <Button label="Hello world" raised accent /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>);
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);