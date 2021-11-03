var events = require('events');
const { clearScreenDown } = require('readline');
var eventEmitter = new events.EventEmitter();

// Create a event handler
var myEventHandler = function() {
    console.log('I hear a scream!');
}

// Assign the event handler to an event
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event:
eventEmitter.emit('scream');
