"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parking_lot_1 = __importDefault(require("./code/parking-lot"));
const types_1 = require("./code/types");
const vehicle_1 = require("./code/vehicle");
const parkingLot = parking_lot_1.default.getInstance();
const gates = parkingLot.getGates();
console.log(gates);
const gate1Entrance = gates[0].entrance;
const gate1Exit = gates[0].exit;
console.log(parkingLot.showBoard());
const v1 = vehicle_1.VehicleFactory.getInstance(types_1.ParkingSpotTypes.HANDICAPPED, "12345");
const v2 = vehicle_1.VehicleFactory.getInstance(types_1.ParkingSpotTypes.COMPACT, "45678");
const v3 = vehicle_1.VehicleFactory.getInstance(types_1.ParkingSpotTypes.LARGE, "6789");
const v4 = vehicle_1.VehicleFactory.getInstance(types_1.ParkingSpotTypes.BIKE, "5544");
const ticket1 = gate1Entrance.getTicket(v1);
gate1Entrance.getTicket(v2);
gate1Entrance.getTicket(v3);
gate1Entrance.getTicket(v4);
console.log("Before removal ------------------------------------------------- ");
console.log(parkingLot.showBoard());
//@ts-ignore
gate1Exit.removeVehicle(ticket1);
console.log("After removal  ------------------------------------------------- ");
console.log(parkingLot.showBoard());
