"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gate_1 = require("./gate");
const display_board_1 = __importDefault(require("./display-board"));
const ticket_1 = __importDefault(require("./ticket"));
const parking_spot_1 = require("./parking-spot");
const parking_spot_strategy_1 = require("./parking-spot-strategy");
const types_1 = require("./types");
const cost_computation_1 = require("./cost-computation");
class ParkingLot {
    constructor() {
        if (ParkingLot.instance) {
            throw new Error("Singleton classes can't be instantiated more than once.");
        }
        const gates = gate_1.GateManager.getGates(2, this);
        this.gates = gates;
        const spots = new Map();
        for (let i = 0; i < gates.length; i++) {
            spots.set(i, this.initializeSpots());
        }
        this.usedSpots = new Map();
        const parkingSpotStrategyFactoryManager = new parking_spot_strategy_1.ParkingSpotStrategyFactoryManager();
        this.currentStrategy = parkingSpotStrategyFactoryManager.setParkingStrategy(types_1.ParkingSpotStrategyTypes.NEAR_ENTRANCE_STRATEGY, spots);
        this.spots = spots;
        this.displayBoard = new display_board_1.default(1, this.spots, this.usedSpots);
        this.cc = new cost_computation_1.CostComputation();
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
        const spotsInventory = {};
        Object.values(types_1.ParkingSpotTypes).forEach((key, index) => {
            spotsInventory[key] = inventory[index];
        });
        const spots = new Map();
        Object.keys(spotsInventory).forEach((type) => {
            if (!spots.has(type)) {
                spots.set(type, []);
            }
            const count = spotsInventory[type];
            for (let i = 0; i < count; i++) {
                const instance = parking_spot_1.ParkingSpotFactory.getInstance(type);
                spots.get(type).push(instance);
            }
        });
        return spots;
    }
    getParkingTicket(v, id) {
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
        const ticket = new ticket_1.default(new Date(), spot, v, id);
        return ticket;
    }
    exit(ticket) {
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
exports.default = ParkingLot;
