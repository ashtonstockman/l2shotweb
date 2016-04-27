var React = require('react');
var ReactDOM = require('react-dom');
import {Sample} from 'medkoder.frontend.core/lib';
import {Sample2} from 'medkoder.frontend.core/lib';
import {Sample3} from 'medkoder.frontend.core/lib';

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Sample />
                <Sample2 />
                <Sample3 />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);