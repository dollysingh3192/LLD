"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingSpotFactory = exports.ParkingSpot = void 0;
const types_1 = require("./types");
let id = 1;
class ParkingSpot {
    constructor() {
        this.id = id;
        this.isFree = true;
        this.vehicle = null;
        id += 1;
        this.type = types_1.ParkingSpotTypes.COMPACT;
    }
    assignVehicle(v) {
        this.vehicle = v;
        this.isFree = false;
    }
    removeVehicle() {
        this.vehicle = null;
        this.isFree = true;
    }
}
exports.ParkingSpot = ParkingSpot;
class Handicapped extends ParkingSpot {
    constructor() {
        super();
        this.type = types_1.ParkingSpotTypes.HANDICAPPED;
    }
}
class Compact extends ParkingSpot {
    constructor() {
        super();
        this.type = types_1.ParkingSpotTypes.COMPACT;
    }
}
class Large extends ParkingSpot {
    constructor() {
        super();
        this.type = types_1.ParkingSpotTypes.LARGE;
    }
}
class Bike extends ParkingSpot {
    constructor() {
        super();
        this.type = types_1.ParkingSpotTypes.BIKE;
    }
}
class ParkingSpotFactory {
    static getInstance(type) {
        switch (type) {
            case types_1.ParkingSpotTypes.HANDICAPPED:
                return new Handicapped();
            case types_1.ParkingSpotTypes.COMPACT:
                return new Compact();
            case types_1.ParkingSpotTypes.LARGE:
                return new Large();
            case types_1.ParkingSpotTypes.BIKE:
                return new Bike();
            default:
                return null;
        }
    }
}
exports.ParkingSpotFactory = ParkingSpotFactory;
