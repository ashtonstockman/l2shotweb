var React = require('react');
var ReactDOM = require('react-dom');
import Button from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

var App = React.createClass({
    getInitialState: function() {
        return { value:'' };
    },
    handleChange: function(event) {
        console.log(event);
        this.setState({
            value: event
        });
    },
    
    render: function() {
        return (<div><br /><br /><br />
                 <Input type='text' label='Name' name='name' value={this.state.value} onChange={this.handleChange} />
                 <Button label="Hello world?!" raised accent className='customized' />

        </div>);
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);