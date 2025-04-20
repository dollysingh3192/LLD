import { Gate } from "./gate";
import { ParkingSpot } from "./parking-spot";
import { Vehicle } from "./vehicle";


class Ticket {
    entryTime: Date;
    parkingSpot: ParkingSpot;
    vehicle: Vehicle;
    gateNo: number;
    
    constructor(entryTime: Date, parkingSpot: ParkingSpot, vehicle: Vehicle, gateNo: number) {
        this.entryTime = entryTime;
        this.parkingSpot = parkingSpot;
        this.vehicle = vehicle;
        this.gateNo = gateNo;
    }
}

export default Ticket;