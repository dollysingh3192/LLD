import { Vehicle } from "./vehicle";
import { Gate, GateManager } from "./gate";
import DisplayBoard from "./display-board";
import Ticket from "./ticket";
import { ParkingSpotFactory, ParkingSpot } from "./parking-spot";
import { ParkingSpotStrategyFactoryManager, ParkingSpotStrategy } from './parking-spot-strategy';
import { ParkingSpotTypes, ParkingSpotStrategyTypes, SpotsMap, UsedSpotsMap } from './types';
import { CostComputation } from "./cost-computation";

class ParkingLot {
    gates: Gate[];
    spots: SpotsMap;
    currentStrategy: ParkingSpotStrategy;
    displayBoard: DisplayBoard
    usedSpots: UsedSpotsMap;
    static instance: ParkingLot;
    cc: CostComputation;

    constructor() {
        if (ParkingLot.instance) {
            throw new Error("Singleton classes can't be instantiated more than once.")
        }

        const gates = GateManager.getGates(2, this);
        this.gates = gates;

        const spots = new Map() as SpotsMap;
        for (let i = 0; i < gates.length; i++) {
            spots.set(i, this.initializeSpots())
        }
        this.usedSpots = new Map();

        const parkingSpotStrategyFactoryManager = new ParkingSpotStrategyFactoryManager();
        this.currentStrategy = parkingSpotStrategyFactoryManager.setParkingStrategy(ParkingSpotStrategyTypes.NEAR_ENTRANCE_STRATEGY, spots)
        this.spots = spots;

        this.displayBoard = new DisplayBoard(1, this.spots, this.usedSpots);
        this.cc = new CostComputation();
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ParkingLot();
        return this.instance;
    }

    initializeSpots() {
        const inventory = [1, 5, 3, 1];
        const spotsInventory = {} as Record<string, number>;

        Object.values(ParkingSpotTypes).forEach((key, index) => {
            spotsInventory[key] = inventory[index];
        });

        const spots = new Map() as Map<string, ParkingSpot[]>;

        Object.keys(spotsInventory).forEach((type) => {
            if (!spots.has(type)) {
                spots.set(type, []);
            }

            const count = spotsInventory[type];
            
            for (let i = 0; i < count; i++) {
                const instance = ParkingSpotFactory.getInstance(type);
                spots.get(type).push(instance);
            }
        });
        
        return spots;
    }

    getParkingTicket(v: Vehicle, id: number) {
        const type = v.type;
        //1. Strategy find the optimal spot
        const spot = this.currentStrategy.findParkingSpot(id, type);
        if (!spot)
            return "No Space Available";
        spot.assignVehicle(v);
        //TODO: Note remove from minHeap and from available spots, and from unused spots
        // We mark the parking spot as reserved and remove it from the available set. 
        // We also remove it from the min-heaps of other entrances.
        this.usedSpots.set(spot.id, spot);
        const ticket = new Ticket(new Date(), spot, v, id);
        return ticket;
    }

    exit(ticket: Ticket) {
        //1. calculate price
        const amount = this.cc.getCurrentStrategy().price(ticket);
        //2. remove vehicle from spot
        const spot = ticket.parkingSpot;
        spot.removeVehicle();
        //3. Delete spot from ocuppied spots
        const type = spot.type;
        const gateNo = ticket.gateNo;
        this.usedSpots.delete(spot.id);
        this.spots.get(gateNo).get(type).push(spot);
        //TODO: 4. Update spot in strategy again
        return amount;
    }

    getGates() {
        return this.gates;
    }

    showBoard() {
        return this.displayBoard.status();
    }
}

export default ParkingLot;