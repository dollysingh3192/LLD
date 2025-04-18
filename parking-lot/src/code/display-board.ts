import { SpotsMap, UsedSpotsMap } from "./types";


class DisplayBoard {
    id;
    spots;
    usedSpots;
    constructor(id: number, spots: null | SpotsMap, usedSpots: UsedSpotsMap) {
      this.id = id;
      this.spots = spots;
      this.usedSpots = usedSpots;
    }
  
    status() {
      return this;
    }
  }
  

  export default DisplayBoard;
  