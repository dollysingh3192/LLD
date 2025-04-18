import { ParkingSpot } from "./parking-spot";
import { ParkingSpotStrategyTypes } from "./types";

class ParkingSpotStrategy {
  findParkingSpot(spots: ParkingSpot[]) {}
}

class DefaultStrategy extends ParkingSpotStrategy {
  constructor() {
    super();
  }
  findParkingSpot(spots: ParkingSpot[]) {
    return spots.pop();
  }
}

class NearEntranceStrategy extends ParkingSpotStrategy {
  constructor() {
    super();
  }
  findParkingSpot(spots: ParkingSpot[]) {
    //Implement it!!!
    return spots.pop();
  }
}

class ParkingSpotStrategyFactoryManager {
  currentStrategyType;
  currentStrategy;
  strategies;
  constructor() {
    this.currentStrategyType = ParkingSpotStrategyTypes.DEFAULT_STRATEGY;
    this.currentStrategy = this.setParkingStrategy(this.currentStrategyType);
    this.strategies = ParkingSpotStrategyTypes;
  }

  setParkingStrategy(newStrategyType: string) {
    switch (newStrategyType) {
      case ParkingSpotStrategyTypes.DEFAULT_STRATEGY:
        return new DefaultStrategy();
      case ParkingSpotStrategyTypes.NEAR_ENTRANCE_STRATEGY:
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

export { ParkingSpotStrategyFactoryManager };
