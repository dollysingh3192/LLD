import { ParkingSpot } from "./parking-spot";

const ParkingSpotTypes = {
    ["HANDICAPPED"]: "HANDICAPPED",
    ["COMPACT"]: "COMPACT",
    ["LARGE"]: "LARGE",
    ["BIKE"]: "BIKE"
}

const ParkingSpotStrategyTypes = {
    ["DEFAULT_STRATEGY"]: "DEFAULT_STRATEGY",
    ["NEAR_ENTRANCE_STRATEGY"]: "NEAR_ENTRANCE_STRATEGY"
}

type SpotsMap = Map<number, Map<string, ParkingSpot[]>>;
type UsedSpotsMap = Map<number, ParkingSpot>;

export { ParkingSpotTypes, ParkingSpotStrategyTypes, SpotsMap, UsedSpotsMap }