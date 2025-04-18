"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingSpotStrategyFactoryManager = void 0;
const types_1 = require("./types");
class ParkingSpotStrategy {
    findParkingSpot(spots) { }
}
class DefaultStrategy extends ParkingSpotStrategy {
    constructor() {
        super();
    }
    findParkingSpot(spots) {
        return spots.pop();
    }
}
class NearEntranceStrategy extends ParkingSpotStrategy {
    constructor() {
        super();
    }
    findParkingSpot(spots) {
        //Implement it!!!
        return spots.pop();
    }
}
class ParkingSpotStrategyFactoryManager {
    constructor() {
        this.currentStrategyType = types_1.ParkingSpotStrategyTypes.DEFAULT_STRATEGY;
        this.currentStrategy = this.setParkingStrategy(this.currentStrategyType);
        this.strategies = types_1.ParkingSpotStrategyTypes;
    }
    setParkingStrategy(newStrategyType) {
        switch (newStrategyType) {
            case types_1.ParkingSpotStrategyTypes.DEFAULT_STRATEGY:
                return new DefaultStrategy();
            case types_1.ParkingSpotStrategyTypes.NEAR_ENTRANCE_STRATEGY:
                return new NearEntranceStrategy();
            default:
                return null;
        }
    }
    getAllStrategies() {
        return this.strategies;
    }
    getCurrentStrategy() {
        return this.currentStrategy;
    }
}
exports.ParkingSpotStrategyFactoryManager = ParkingSpotStrategyFactoryManager;
