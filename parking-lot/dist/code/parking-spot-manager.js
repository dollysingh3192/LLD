"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingSpotManager = void 0;
const parking_spot_strategy_1 = require("./parking-spot-strategy");
class ParkingSpotManager {
    constructor() {
        this.parkingSpotStrategyFactoryManager = new parking_spot_strategy_1.ParkingSpotStrategyFactoryManager();
    }
    getParkingSpotStrategyFactoryManager() {
        return this.parkingSpotStrategyFactoryManager;
    }
    assignVehicleOnSpot(v, spots, usedSpots) {
        const type = v.type;
        const spotList = spots.get(type);
        if (!spots.has(type) || !spotList || spotList.length === 0) {
            return [false, "Some Other Problem"];
        }
        const ps = this.parkingSpotStrategyFactoryManager.getCurrentStrategy();
        if (!ps)
            return [false, "Not a Valid Parking Strategy"];
        const spot = ps.findParkingSpot(spotList);
        if (!spot)
            return [false, "No Spot found!!!"];
        spot.assignVehicle(v);
        usedSpots.set(spot.id, spot);
        return [true, spot];
    }
    removeVehicleFromSpot(spot, spots, usedSpots) {
        const id = spot.id;
        const type = spot.type;
        spot.removeVehicle();
        const spotList = spots.get(type);
        spotList.push(spot);
        usedSpots.delete(id);
    }
}
exports.ParkingSpotManager = ParkingSpotManager;
