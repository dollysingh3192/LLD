import { CostComputation } from "./cost-computation.js";
import { ParkingSpotManager } from "./parking-spot-manager.js";
import { ParkingSpot } from "./parking-spot.js";
import Ticket from "./ticket.js";
import { SpotsMap, UsedSpotsMap } from "./types.js";
import { Vehicle } from "./vehicle.js";

class Entrance {
    id: number;
    parkingSpotManager: ParkingSpotManager;
    constructor(id: number) {
        this.id = id;
        this.parkingSpotManager = new ParkingSpotManager();
    }

    getTicket(vehicle: Vehicle, spots: SpotsMap, usedSpots: UsedSpotsMap, gate: Gate) {
        const data = this.parkingSpotManager.assignVehicleOnSpot(vehicle, spots, usedSpots);
        if(!data[0])
            return "No Space Available";
        const ticket = new Ticket(new Date(), data[1] as ParkingSpot, vehicle, gate);
        return ticket;
    }
}

class Exit {
    id: number;
    parkingSpotManager: ParkingSpotManager;
    cc: CostComputation;
    constructor(id: number) {
        this.id = id;
        this.parkingSpotManager = new ParkingSpotManager();
        this.cc = new CostComputation();
    }

    removeVehicle(ticket: Ticket, spots: SpotsMap, usedSpots: UsedSpotsMap) {
        const amount = this.makePayment(ticket);
        this.vacantSpace(ticket, spots, usedSpots);
        return amount;
    }

    vacantSpace(ticket: Ticket, spots: SpotsMap, usedSpots: UsedSpotsMap) {
        this.parkingSpotManager.removeVehicleFromSpot(ticket.parkingSpot, spots, usedSpots);
    }

    makePayment(ticket: Ticket) {
        const amount = this.cc.getCurrentStrategy().price(ticket);
        return amount;
    }
}

class Gate {
    entrance: Entrance;
    exit: Exit;
    constructor(entrance: Entrance, exit: Exit) {
        this.entrance = entrance;
        this.exit = exit;
    }
}

class GateManager {

    static getGates(count: number) {
        const pairs: Gate[] = [];
        for(let i = 0; i < count; i++) {
            const entrance = new Entrance(i);
            const exit = new Exit(i);
            pairs.push(new Gate(entrance, exit));
        }

        return pairs;
    }
}

export {GateManager, Gate};