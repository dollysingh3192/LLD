"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parking_lot_1 = __importDefault(require("./code/parking-lot"));
const vehicle_1 = require("./code/vehicle");
const types_1 = require("./code/types");
const parkingLot = new parking_lot_1.default;
const v1 = vehicle_1.VehicleFactory.getInstance(types_1.ParkingSpotTypes.HANDICAPPED, "12345");
const v2 = vehicle_1.VehicleFactory.getInstance(types_1.ParkingSpotTypes.HANDICAPPED, "45678");
// console.log(parkingLot.getGates());
const gates = parkingLot.getGates();
const gate = gates[0];
const ticket = parkingLot.getParkingTicket(v1, gate);
console.log(ticket);
console.log(parkingLot.showBoard());
console.log(parkingLot.getParkingTicket(v2, gate));
setTimeout(() => {
    //@ts-ignore
    console.log(parkingLot.removeVehicle(ticket));
    console.log(parkingLot.showBoard());
}, 5000);
