export default class Tile {
    protected _isBomb: boolean;
    protected _nearbyBombs: number = 0;
    protected _position: { x: number; y: number };
  
    get isBomb() {
      return this._isBomb;
    }
    get nearbyBombs() {
      return this._nearbyBombs; 
    }  
    
    public set setNearbyBombs(v : number) {
      this._nearbyBombs += v;
    }
    
    get position() {
      return this._position;
    }
  
    constructor(
      isBomb: boolean,
      nearbyBombs: number,
      position: { x: number; y: number },
    ) {
      this._isBomb = isBomb;
      this._nearbyBombs = nearbyBombs;
      this._position = position;
    }
  }
  