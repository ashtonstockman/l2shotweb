var React = require('react');
var Reflux = require('reflux');
var todoStore = require('../stores/todoStore');
var todoActions = require('../actions/todoActions');
var AddItem = require('./AddItem');
var List = require('./List');

var ListContainer = React.createClass({
    mixins: [Reflux.connect(todoStore, 'todoStore')],
    render: function () {
        if (this.state.todoStore) {
            return (
                <div className="col-sm-6 col-md-offset-3">
                    <div className="col-sm-12">
                        <h3 className="text-center">Todo with Reflux.js</h3>
                        <AddItem add={todoActions.addItem}/>
                        <List items={this.state.todoStore} remove={todoActions.removeItem}/>
                    </div>
                </div>
            )
        } else {
            return <div></div>
        }
    }
});

module.exports = ListContainer;