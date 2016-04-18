"use strict";

var Reflux = require('reflux');

var todoActions = Reflux.createActions([
    'addItem',
    'removeItem'
]);

module.exports = todoActions;