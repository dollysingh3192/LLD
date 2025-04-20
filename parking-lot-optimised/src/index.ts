

import ParkingLot from "./code/parking-lot";
import { ParkingSpotTypes } from "./code/types";
import { VehicleFactory } from "./code/vehicle";

const parkingLot = ParkingLot.getInstance();

const gates = parkingLot.getGates();
console.log(gates);
const gate1Entrance = gates[0].entrance;
const gate1Exit = gates[0].exit;

console.log(parkingLot.showBoard());

const v1 = VehicleFactory.getInstance(ParkingSpotTypes.HANDICAPPED, "12345");
const v2 = VehicleFactory.getInstance(ParkingSpotTypes.COMPACT, "45678");
const v3 = VehicleFactory.getInstance(ParkingSpotTypes.LARGE, "6789");
const v4 = VehicleFactory.getInstance(ParkingSpotTypes.BIKE, "5544");

const ticket1 = gate1Entrance.getTicket(v1);
gate1Entrance.getTicket(v2);
gate1Entrance.getTicket(v3);
gate1Entrance.getTicket(v4);

console.log("Before removal ------------------------------------------------- ")
console.log(parkingLot.showBoard());

//@ts-ignore
gate1Exit.removeVehicle(ticket1);

console.log("After removal  ------------------------------------------------- ")
console.log(parkingLot.showBoard());