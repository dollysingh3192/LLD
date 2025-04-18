import { ParkingSpot } from "./parking-spot";
import { ParkingSpotStrategyFactoryManager } from "./parking-spot-strategy";
import { SpotsMap, UsedSpotsMap } from "./types";
import { Vehicle } from "./vehicle";

class ParkingSpotManager {
  parkingSpotStrategyFactoryManager
  constructor() {
    this.parkingSpotStrategyFactoryManager = new ParkingSpotStrategyFactoryManager();
  }

  getParkingSpotStrategyFactoryManager() {
    return this.parkingSpotStrategyFactoryManager;
  }

  assignVehicleOnSpot(v: Vehicle, spots: SpotsMap, usedSpots: UsedSpotsMap) {
    
    const type = v.type;

    const spotList = spots.get(type);
    if (!spots.has(type) || !spotList || spotList.length === 0) {
      return [false, "Some Other Problem"];
    }

    const ps = this.parkingSpotStrategyFactoryManager.getCurrentStrategy();
    if(!ps)
        return [false, "Not a Valid Parking Strategy"];

    const spot = ps.findParkingSpot(spotList);

    if(!spot)
        return [false, "No Spot found!!!"]
    spot.assignVehicle(v);

    usedSpots.set(spot.id, spot);

    return [true, spot];
  }

  removeVehicleFromSpot(spot: ParkingSpot, spots: SpotsMap, usedSpots: UsedSpotsMap) {
    const id = spot.id;
    const type = spot.type;

    spot.removeVehicle();
    
    const spotList = spots.get(type);
    spotList.push(spot);
    usedSpots.delete(id);
  }

}

export { ParkingSpotManager };
