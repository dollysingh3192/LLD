"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleFactory = exports.Vehicle = void 0;
const types_1 = require("./types");
class Vehicle {
    constructor(licenseNo) {
        this.licenseNo = licenseNo;
        this.type = types_1.ParkingSpotTypes.COMPACT;
    }
}
exports.Vehicle = Vehicle;
class Handicapped extends Vehicle {
    constructor(licencseNo) {
        super(licencseNo);
        this.type = types_1.ParkingSpotTypes.HANDICAPPED;
    }
}
class Compact extends Vehicle {
    constructor(licencseNo) {
        super(licencseNo);
        this.type = types_1.ParkingSpotTypes.COMPACT;
    }
}
class Large extends Vehicle {
    constructor(licencseNo) {
        super(licencseNo);
        this.type = types_1.ParkingSpotTypes.LARGE;
    }
}
class Bike extends Vehicle {
    constructor(licencseNo) {
        super(licencseNo);
        this.type = types_1.ParkingSpotTypes.BIKE;
    }
}
class VehicleFactory {
    static getInstance(type, licencseNo) {
        switch (type) {
            case types_1.ParkingSpotTypes.HANDICAPPED:
                return new Handicapped(licencseNo);
            case types_1.ParkingSpotTypes.COMPACT:
                return new Compact(licencseNo);
            case types_1.ParkingSpotTypes.LARGE:
                return new Large(licencseNo);
            case types_1.ParkingSpotTypes.BIKE:
                return new Bike(licencseNo);
            default:
                return null;
        }
    }
}
exports.VehicleFactory = VehicleFactory;
