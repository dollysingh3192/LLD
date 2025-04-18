
import ParkingLot from "./code/parking-lot";
import { Vehicle, VehicleFactory } from "./code/vehicle";
import { ParkingSpotTypes } from "./code/types";

const parkingLot = new ParkingLot;

const v1 = VehicleFactory.getInstance(ParkingSpotTypes.HANDICAPPED, "12345");
const v2 = VehicleFactory.getInstance(ParkingSpotTypes.HANDICAPPED, "45678");

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


