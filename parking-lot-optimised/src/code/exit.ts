import ParkingLot from "./parking-lot";
import Ticket from "./ticket";

class Exit {
    id: number;
    parkingLot: ParkingLot;

    constructor(id: number, parkingLot: ParkingLot){
        this.id = id;
        this.parkingLot = parkingLot;
    }
    
    removeVehicle(ticket: Ticket) {
        return this.parkingLot.exit(ticket);
    }
}

export default Exit;