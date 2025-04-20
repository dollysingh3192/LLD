"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exit {
    constructor(id, parkingLot) {
        this.id = id;
        this.parkingLot = parkingLot;
    }
    removeVehicle(ticket) {
        return this.parkingLot.exit(ticket);
    }
}
exports.default = Exit;
