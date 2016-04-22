var React = require('react');
var ReactDOM = require('react-dom');
import Button from 'react-toolbox/lib/button';
import {Tab, Tabs} from 'react-toolbox/lib/tabs'
import Checkbox from 'react-toolbox/lib/checkbox';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';

var App = React.createClass({
    getInitialState: function() {
        return {
            index: 0, 
            value: Array(50).fill().map((x,i)=>i),
            checks: Array(50).fill().map((x,i)=>false),
            dummyText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            emails: Array(50).fill().map((x,i)=>`${i}@${i}.com`)
        };
    },
    handleTabChange: function(index) {
        this.setState({index});
    },
    handleCheckboxChange: function(index, value) {
        var checks = this.state.checks;
        checks[index] = value;
        this.setState({ checks: checks });
    },
    handleInputChange: function(index, value) {
        var emails = this.state.emails;
        emails[index] = value;
        this.setState({ emails: emails });
    },
    render: function() {
        var buttons = this.state.value.map((item, index) => {
            return (
                <div key={index}>
                    <br />
                    <Button label={item.toString()} accent />
                    <Button label={item.toString()} raised primary />
                    <Button label={item.toString()} flat />
                    <Button label={item.toString()} floating accent />
                    <Button icon='add' label='Add this' flat primary />
                    <Button icon='add' label='Add this' flat disabled />
                </div>
            )
        });

        var checkboxes = this.state.checks.map((item, index) => {
            return (
                <div key={index}>
                    <br />
                    <Checkbox
                        checked={item} 
                        onChange={this.handleCheckboxChange.bind(this, index)} 
                        label={index.toString()} />
                    <Checkbox
                        checked={!item} 
                        onChange={this.handleCheckboxChange.bind(this, index)} 
                        label={'!' + index.toString()} />
                    <Checkbox
                        checked
                        disabled
                        label="Disabled checkbox" />
                </div>
            )
        });

        var inputs = this.state.emails.map((item, index) => {
            return (
                <div key={index}>
                    <Input type='email' required label='Email address' icon='email' value={item} onChange={this.handleInputChange.bind(this, index)} />
                </div>
            );
        });

        var cards = this.state.value.map((item, index) => {
            return (
                <div key={index}>
                    <br />
                    <Card style={{width: '350px'}}>
                        <CardTitle avatar='https://placekitten.com/80/80' title={item.toString()} subtitle={item.toString()} />
                        <CardMedia aspectRatio="wide" image="https://placekitten.com/800/450" />
                        <CardTitle title="Title goes here" subtitle="Subtitle here" />
                        <CardText>{this.state.dummyText}</CardText>
                        <CardActions>
                            <Button label="Approve" />
                            <Button label="Deny" />
                        </CardActions>
                    </Card>
                </div>
            );
        });

        return (
            <div>
                <Tabs index={this.state.index} onChange={this.handleTabChange}>
                    <Tab label="Buttons"><small>{buttons}</small></Tab>
                    <Tab label="Checkboxes"><small>{checkboxes}</small></Tab>
                    <Tab label="Inputs"><small>{inputs}</small></Tab>
                    <Tab label="Cards"><small>{cards}</small></Tab>
                </Tabs>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);