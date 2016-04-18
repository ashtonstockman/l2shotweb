"use strict";

var Reflux = require('reflux');
var todoActions = require('../actions/todoActions');

var todoStore = Reflux.createStore({
    listenables: [todoActions],
    init: function () {
        this.list = [];
    },
    getInitialState: function () {
        return this.list;
    },
    onAddItem: function (item) {
        this.list.push(item);
        this.trigger(this.list);
    },
    onRemoveItem: function (index) {
        this.list.splice(index, 1);
        this.trigger(this.list);
    }
});

module.exports = todoStore;