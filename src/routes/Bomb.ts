export default class Bomb {
    private _position: { x: number, y: number }
    get position() {
        return this._position;
    }

    constructor(position: { x: number, y: number }) {
        this._position = position;
    }
}