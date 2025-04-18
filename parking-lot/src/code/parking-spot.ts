import { ParkingSpotTypes } from "./types"
import { Vehicle } from "./vehicle";

let id = 1;

class ParkingSpot {
    id;
    isFree;
    vehicle: Vehicle | null;
    type: string;

    constructor() {
        this.id = id;
        this.isFree = true;
        this.vehicle = null;
        id += 1;
        this.type = ParkingSpotTypes.COMPACT;
    }

    assignVehicle(v: Vehicle) {
        this.vehicle = v;
        this.isFree = false;
    }

    removeVehicle() {
        this.vehicle = null;
        this.isFree = true;
    }
}

class Handicapped extends ParkingSpot {
    type;
    constructor() {
        super();
        this.type = ParkingSpotTypes.HANDICAPPED;
    }
}

class Compact extends ParkingSpot {
    type;
    constructor() {
        super();
        this.type = ParkingSpotTypes.COMPACT;
    }
}

class Large extends ParkingSpot {
    type;
    constructor() {
        super();
        this.type = ParkingSpotTypes.LARGE;
    }
}

class Bike extends ParkingSpot {
    type;
    constructor() {
        super();
        this.type = ParkingSpotTypes.BIKE;
    }
}

class ParkingSpotFactory {
    static getInstance(type: string) {
        switch (type) {
            case ParkingSpotTypes.HANDICAPPED:
                return new Handicapped();
            case ParkingSpotTypes.COMPACT:
                return new Compact();
            case ParkingSpotTypes.LARGE:
                return new Large();
            case ParkingSpotTypes.BIKE:
                return new Bike();
            default:
                return null;
        }
    }
}

export { ParkingSpot, ParkingSpotFactory };