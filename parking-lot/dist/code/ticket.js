"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ticket {
    constructor(entryTime, parkingSpot, vehicle, gate) {
        this.entryTime = entryTime;
        this.parkingSpot = parkingSpot;
        this.vehicle = vehicle;
        this.gate = gate;
    }
}
exports.default = Ticket;
