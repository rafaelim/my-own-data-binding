export default function Notifier() {
    this.handlers = {};
}

Notifier.prototype.register = function(key, handler){
    console.debug("Callback registered for ", key)
    this.handlers[key] = handler;
}

Notifier.prototype.notify = function(key) {
    if(typeof this.handlers[key] === "function") {
        console.debug("Notifying callback for ", key)
        this.handlers[key]();
    }
}

