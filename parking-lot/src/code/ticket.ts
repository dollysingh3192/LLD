import { Gate } from "./gate";
import { ParkingSpot } from "./parking-spot";
import { Vehicle } from "./vehicle";


class Ticket {
    entryTime: Date;
    parkingSpot: ParkingSpot;
    vehicle: Vehicle;
    gate: Gate;
    constructor(entryTime: Date, parkingSpot: ParkingSpot, vehicle: Vehicle, gate: Gate) {
        this.entryTime = entryTime;
        this.parkingSpot = parkingSpot;
        this.vehicle = vehicle;
        this.gate = gate;
    }
}

export default Ticket;