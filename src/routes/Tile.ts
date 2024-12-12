export default class Tile {
    private _isBomb: boolean;
    private _nearbyBombs: number;
    private _position: { x: number, y: number }


    get isBomb() {
        return this._isBomb;
    }
    get nearbyBombs() {
        return this._nearbyBombs;
    }
    get position() {
        return this._position;
    }

    constructor(isBomb: boolean, nearbyBombs: number, position: {x: number, y: number}) {
        this._isBomb = isBomb;
        this._nearbyBombs = nearbyBombs;
        this._position = position;
    }
}