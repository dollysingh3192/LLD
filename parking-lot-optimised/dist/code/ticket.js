"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ticket {
    constructor(entryTime, parkingSpot, vehicle, gateNo) {
        this.entryTime = entryTime;
        this.parkingSpot = parkingSpot;
        this.vehicle = vehicle;
        this.gateNo = gateNo;
    }
}
exports.default = Ticket;
