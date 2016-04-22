var React = require('react');
var ReactDOM = require('react-dom');
import Button from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';
import Checkbox from 'react-toolbox/lib/checkbox';
import { RadioGroup, RadioButton } from 'react-toolbox/lib/radio';
import Dropdown from 'react-toolbox/lib/dropdown';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import DatePicker from 'react-toolbox/lib/date_picker';

import MuiRaisedButton from 'material-ui/lib/raised-button';
import MuiCard from 'material-ui/lib/card/card';

import MuiCardHeader from 'material-ui/lib/card/card-header';
import MuiCardText from 'material-ui/lib/card/card-text';
import MuiTextField from 'material-ui/lib/text-field';
import MuiDatePicker from 'material-ui/lib/date-picker/date-picker';
import MuiCheckbox from 'material-ui/lib/checkbox';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MuiRadioButton from 'material-ui/lib/radio-button';
import MuiRadioButtonGroup from 'material-ui/lib/radio-button-group';
import FlatButton from 'material-ui/lib/flat-button';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const countries = [
  { value: 'EN-gb', label: 'England' },
  { value: 'ES-es', label: 'Spain'},
  { value: 'TH-th', label: 'Thailand' },
  { value: 'EN-en', label: 'USA'}
];

var RtInput = React.createClass({
    getInitialState: function() {
        return { value:'' };
    },
    handleChange: function(event) {
        this.setState({
            value: event
        });
    },
    
    render: function() {
        return (
                <Input type='text' label={this.props.label} name={this.props.name} value={this.state.value} onChange={this.handleChange} />
            );
    }
});

var RtDropdown = React.createClass({
    getInitialState: function() {
        return { value:'EN-gb' };
    },
    handleChange: function(event) {
        this.setState({
            value: event
        });
    },

    render: function() {
        return (<Dropdown auto onChange={this.handleChange} source={countries} value={this.state.value} />);
    }
});

var MuiDropdown = React.createClass({
    getInitialState: function() {
        return { value:1 };
    },
    handleChange: function(event, index, value) {
        console.log(event);
        this.setState({
            value: value
        });
    },

    render: function() {
        return (<div>
        <SelectField value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="England" />
          <MenuItem value={2} primaryText="Spain" />
          <MenuItem value={3} primaryText="Thailand" />
          <MenuItem value={4} primaryText="USA" />
        </SelectField>
        <br />
        </div>);
    }
});

var RtCheckbox = React.createClass({
    getInitialState: function() {
        return { value:false };
    },
    handleChange: function(event) {
        this.setState({
            value: event
        });
    },

    render: function() {
        return (
                <Checkbox label={this.props.label} checked={this.state.value} onChange={this.handleChange} />
            );
    }
});

var RtRadio = React.createClass({
    getInitialState: function() {
        return { value: 'one' };
    },
    handleChange: function(event) {
        this.setState({
            value: event
        });
    },

    render: function() {
        return (
                <RadioGroup name='comic' value={this.state.value} onChange={this.handleChange}>
                    <RadioButton label='one' value='one' />
                    <RadioButton label='two' value='two' disabled />
                    <RadioButton label='three' value='three' />
                </RadioGroup>
            );
    }
});

var RtDatePicker = React.createClass({
    getInitialState: function() {
        return { value: new Date(2016, 10, 16) };
    },
    handleChange: function(event) {
        this.setState({
            value: event
        });
    },

    render: function() {
        return (
                 <DatePicker label='Birthdate' onChange={this.handleChange} value={this.state.value} />
            );
    }
});


var App = React.createClass({
    render: function() {
        return (<div className="divMain">
            <br /><br /><br />
            <div className="bachelor">
            <Card>
                <CardTitle title='Option #1' />
                <CardText>
                    <RtInput label='Name' name='Name' />
                    <RtInput label='Address' name='Address' />
                    <MuiDatePicker hintText="Enter date" />
                    <RtCheckbox label='One' /><RtCheckbox label='Two' />
                    <MuiDropdown />
                    <RtRadio />
                    <MuiRaisedButton label="Button" primary={true} />
                    <MuiRaisedButton label="Button2" secondary={true} />
                    <FlatButton label='Add this' primary={true} />
                </CardText>
            </Card>
            </div>
            <div className="bachelor">
            <br /><br />
            <MuiCard>
                <MuiCardHeader title="Option #2" />
                <MuiCardText>
                    <MuiTextField floatingLabelText='Name' />
                    <MuiTextField floatingLabelText='Address' />
                    <RtDatePicker />
                    <MuiCheckbox label='One' /><MuiCheckbox label='Two' />
                    <RtDropdown />

                    <MuiRadioButtonGroup name="shipSpeed">
                        <MuiRadioButton value="1" label='one' />
                        <MuiRadioButton value="2" label='two' />
                        <MuiRadioButton value="3" label='three' />
                    </MuiRadioButtonGroup>
                    <Button label='Button' raised primary />
                    <Button label='Button2' raised accent />
                    <Button label='Add this' flat primary />

                </MuiCardText>
            </MuiCard>
            </div>
    <div></div>
    </div>);

    }
});



//    getInitialState: function() {
//        return { value:'' };
//    },
//    handleChange: function(event) {
//        console.log(event);
//        this.setState({
//            value: event
//        });
//    },


//        return (<div><br /><br /><br />
//                 <Input type='text' label='Name' name='name' value={this.state.value} onChange={this.handleChange} />
//                 <Checkbox label="Checked option" />
//                <RadioGroup name='comic' >
//                    <RadioButton label='One' value='thewalkingdead' />
//                    <RadioButton label='Two' value='fromhell' disabled />
//                    <RadioButton label='Three' value='vvendetta' />
//                    <RadioButton label='Four' value='watchmen' />
//                </RadioGroup>
//                <Dropdown auto
//              source={countries} />
//                 <Button label="Hello world?!" raised accent />

//        </div>);
//    }
//});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
