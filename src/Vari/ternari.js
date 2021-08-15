/*
    Esempi di utilizzo del ternario
    
        this.queue = options ? Array.isArray(options.queue) ? options.queue : defaultOptions.queue : defaultOptions.queue;
        this.checkInterval = options ? typeof options.checkInterval === "number" ? options.checkInterval : defaultOptions.checkInterval : defaultOptions.checkInterval;
        this.minMatchSize = options ? typeof options.minMatchSize === "number" ? options.minMatchSize : defaultOptions.minMatchSize : defaultOptions.minMatchSize;
        this.maxMatchSize = options ? typeof options.maxMatchSize === "number" ? options.maxMatchSize : defaultOptions.maxMatchSize : defaultOptions.maxMatchSize;
        this.matchPlayersFunction = options ? typeof options.matchPlayersFunction === "function" ? options.matchPlayersFunction : defaultOptions.matchPlayersFunction : defaultOptions.matchPlayersFunction;
        this.getQueue = options ? typeof options.getQueue === "function" ? options.getQueue : () => this.queue : () => this.queue;
        this.updateQueue = options ? typeof options.updateQueue === "function" ? options.updateQueue : (q) => this.queue = q : (q) => this.queue = q
*/


function testterna(options){

    console.log(options?Array.isArray(options)?'array':'non array':'finale')
}

testterna(['pippo]'])
testterna('pluto')
testterna(null)
testterna(undefined)