import { ParkingSpotTypes } from "./types"

class Vehicle {
    type: string;
    licenseNo;
    constructor(licenseNo: string) {
        this.licenseNo = licenseNo
        this.type = ParkingSpotTypes.COMPACT;
    }
}

class Handicapped extends Vehicle {
    type;
    constructor(licencseNo: string) {
        super(licencseNo);
        this.type = ParkingSpotTypes.HANDICAPPED;
    }
}

class Compact extends Vehicle {
    type;
    constructor(licencseNo: string) {
        super(licencseNo);
        this.type = ParkingSpotTypes.COMPACT;
    }
}

class Large extends Vehicle {
    type;
    constructor(licencseNo: string) {
        super(licencseNo);
        this.type = ParkingSpotTypes.LARGE;
    }
}

class Bike extends Vehicle {
    type;
    constructor(licencseNo: string) {
        super(licencseNo);
        this.type = ParkingSpotTypes.BIKE;
    }
}

class VehicleFactory {
    static getInstance(type: string, licencseNo: string) {
        switch (type) {
            case ParkingSpotTypes.HANDICAPPED:
                return new Handicapped(licencseNo);
            case ParkingSpotTypes.COMPACT:
                return new Compact(licencseNo);
            case ParkingSpotTypes.LARGE:
                return new Large(licencseNo);
            case ParkingSpotTypes.BIKE:
                return new Bike(licencseNo);
            default:
                return null;
        }
    }
}

export { Vehicle, VehicleFactory };