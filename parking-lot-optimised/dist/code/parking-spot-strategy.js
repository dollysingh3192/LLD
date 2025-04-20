"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingSpotStrategyFactoryManager = void 0;
const types_1 = require("./types");
class DefaultStrategy {
    constructor(spots) {
        this.spots = spots;
    }
    findParkingSpot(id, type) {
        return this.spots.get(id).get(type).pop();
    }
}
/*

In this scenario, let’s say we have four entrances and would like to return to the parking spot which is nearest to the entrance
from where the customer is entering the parking lot. The best approach is to implement it using a min-heap.

We will declare four min-heaps. We will add all parking spots to these min-heaps, so there will be a min-heap for each entrance.
These min-heaps will store the parking spots in the order of the shortest distance from the entrance.

We will also declare the following two sets of parking spots:

A set of available parking spots
A set of reserved parking spots

We have a map of min-heaps where the key is the entrance ID, and the value is a min-heap.
When the user calls the getParkingSpot method, we get the entrance ID which gives us the min-heap for that entrance and
allows us to pop the top element to get the parking spot.

We mark the parking spot as reserved and remove it from the available set.
We also remove it from the min-heaps of other entrances.

*/
class NearEntranceStrategy {
    constructor(spots) {
        this.spots = spots;
    }
    findParkingSpot(id, type) {
        //Implement it!!! using heaps
        return this.spots.get(id).get(type).pop();
    }
}
class ParkingSpotStrategyFactoryManager {
    constructor() {
        this.strategies = types_1.ParkingSpotStrategyTypes;
    }
    setParkingStrategy(newStrategyType, spots) {
        switch (newStrategyType) {
            case types_1.ParkingSpotStrategyTypes.DEFAULT_STRATEGY:
                return new DefaultStrategy(spots);
            case types_1.ParkingSpotStrategyTypes.NEAR_ENTRANCE_STRATEGY:
                return new NearEntranceStrategy(spots);
            default:
                return null;
        }
    }
    getAllStrategies() {
        return this.strategies;
    }
}
exports.ParkingSpotStrategyFactoryManager = ParkingSpotStrategyFactoryManager;
