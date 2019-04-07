let events = require("events")
let EventEmitter = events.EventEmitter
let emitter = new EventEmitter()

emitter.on("event1", function ( data) {
    console.log("event1")
})

emitter.addListener("event1", function ( data){
    console.log("another event1")
})

emitter.once("event2", function ( data){
    console.log("another event2", data)
})

emitter.emit("event2", {a: 2222})

let caller = emitter.listeners("event1")
caller.forEach(item => {
    item()
})

emitter.removeListener("event1", function(){})
emitter.removeAllListeners("event1")