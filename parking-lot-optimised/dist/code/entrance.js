"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Entrance {
    constructor(id, parkingLot) {
        this.id = id;
        this.parkingLot = parkingLot;
    }
    getTicket(vehicle) {
        return this.parkingLot.getParkingTicket(vehicle, this.id);
    }
}
exports.default = Entrance;
