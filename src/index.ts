interface IHandler {
    callback: () => void;
    timing: number;
}

export default class StepTrigger {
    private _counter: number;
    private _handlers: IHandler[];
    private _addHandlers: IHandler[];

    constructor() {
        this._counter = 0;
        this._handlers = [];
        this._addHandlers = [];
    }

    public step() {
        ++this._counter;
        this._mergeHandler();
        this._checkHandler();
    }

    public reserve(stepCount: number, callback: () => void) {
        this._addHandlers.unshift({
            callback,
            timing: this._counter + stepCount,
        });
    }

    private _mergeHandler() {
        if (this._addHandlers.length === 0) {
            return;
        }

        this._handlers = this._addHandlers.concat(this._handlers);
        this._addHandlers = [];
    }

    private _checkHandler() {
        for (let i = this._handlers.length - 1; i >= 0; --i) {
            if (this._counter >= this._handlers[i].timing) {
                this._handlers[i].callback();
                this._handlers.splice(i, 1);
            }
        }
    }
}
