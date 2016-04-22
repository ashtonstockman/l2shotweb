var React = require('react');
var ReactDOM = require('react-dom');
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Checkbox from 'material-ui/lib/checkbox';
import ActionFavorite from 'material-ui/lib/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/lib/svg-icons/action/favorite-border';

injectTapEventPlugin();

var App = React.createClass({
    getInitialState: function() {
        return {
            tabIndex: "0",
            value: Array(50).fill().map((x,i)=>i),
        };
    },
    handleChange: function(value) {
        this.setState({tabIndex: value});
    },
    render: function() {
        var buttons = this.state.value.map((item, index) => {
            return (
                <div key={index}>
                    <br />
                    <FlatButton label={index.toString()} secondary={true} />
                    <RaisedButton label={index.toString()} />
                    <RaisedButton label={index.toString()} primary={true} />
                    <FloatingActionButton>
                        <ContentAdd />
                    </FloatingActionButton>
                    <FloatingActionButton mini={true} secondary={true}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            )
        });

        var checkboxes = this.state.value.map((item, index) => {
            return (
                <div key={index}>
                    <br />
                        <Checkbox
                              label="Simple" />
                            <Checkbox
                              label="Checked by default"
                              defaultChecked={true} />
                            <Checkbox
                              label="Disabled"
                              disabled={true} />
                            <Checkbox
                              checkedIcon={<ActionFavorite />}
                              unCheckedIcon={<ActionFavoriteBorder />}
                              label="Custom icon" />
                            <Checkbox
                              label="Label on the left"
                              labelPosition="left" />
                </div>
            )
        });

        return (
            <div>
               <Tabs value={this.state.tabIndex} onChange={this.handleChange}>
                <Tab label="Buttons" value="0">
                  <div>
                    {buttons}
                  </div>
                </Tab>
                <Tab label="Checkboxes" value="1" >
                  <div>
                    {checkboxes}
                  </div>
                </Tab>
              </Tabs>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);