import ParkingLot from "./parking-lot";
import { Vehicle } from "./vehicle";

class Entrance {
    id: number;
    parkingLot: ParkingLot;

    constructor(id: number, parkingLot: ParkingLot) {
        this.id = id;
        this.parkingLot = parkingLot;
    }

    getTicket(vehicle: Vehicle) {
        return this.parkingLot.getParkingTicket(vehicle, this.id);
    }
}

export default Entrance;