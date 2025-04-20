import { ParkingSpot } from "./parking-spot";
import { ParkingSpotStrategyTypes, SpotsMap } from "./types";

// class ParkingSpotStrategy {
//     spots: SpotsMap;
//     constructor(spots: SpotsMap) {
//         this.spots = spots;
//     }
//     findParkingSpot(id: number, type: string): ParkingSpot { }
// }

interface ParkingSpotStrategy {
    spots: SpotsMap;
    findParkingSpot(id: number, type: string): ParkingSpot
}

class DefaultStrategy implements ParkingSpotStrategy {
    spots: SpotsMap;
    constructor(spots: SpotsMap) {
        this.spots = spots;
    }

    findParkingSpot(id: number, type: string) {
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

class NearEntranceStrategy implements ParkingSpotStrategy {

    spots: SpotsMap;
    constructor(spots: SpotsMap) {
        this.spots = spots;
    }

    findParkingSpot(id: number, type: string) {
        //Implement it!!! using heaps
        return this.spots.get(id).get(type).pop();
    }
}

class ParkingSpotStrategyFactoryManager {
    strategies: typeof ParkingSpotStrategyTypes;

    constructor() {
        this.strategies = ParkingSpotStrategyTypes;
    }

    setParkingStrategy(newStrategyType: string, spots: SpotsMap) {
        switch (newStrategyType) {
            case ParkingSpotStrategyTypes.DEFAULT_STRATEGY:
                return new DefaultStrategy(spots);
            case ParkingSpotStrategyTypes.NEAR_ENTRANCE_STRATEGY:
                return new NearEntranceStrategy(spots);
            default:
                return null;
        }
    }

    getAllStrategies() {
        return this.strategies;
    }

}

export { ParkingSpotStrategyFactoryManager, ParkingSpotStrategy };
