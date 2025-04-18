"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gate_1 = require("./gate");
const types_1 = require("./types");
const parking_spot_1 = require("./parking-spot");
const display_board_1 = __importDefault(require("./display-board"));
class ParkingLot {
    constructor() {
        const gates = gate_1.GateManager.getGates(2);
        this.gates = gates;
        this.spots = new Map();
        this.usedSpots = new Map();
        this.initializeSpots();
        this.displayBoard = new display_board_1.default(1, this.spots, this.usedSpots);
    }
    showBoard() {
        return this.displayBoard.status();
    }
    initializeSpots() {
        const inventory = [1, 5, 3, 1];
        const spotsInventory = {};
        Object.values(types_1.ParkingSpotTypes).forEach((key, index) => {
            //   const enumKey = ParkingSpotTypes[key as keyof typeof ParkingSpotTypes];
            spotsInventory[key] = inventory[index];
        });
        const spots = new Map();
        Object.keys(spotsInventory).forEach((type) => {
            //   const enumKey = ParkingSpotTypes[type as keyof typeof ParkingSpotTypes];
            if (!spots.has(type)) {
                spots.set(type, []);
            }
            const count = spotsInventory[type];
            for (let i = 0; i < count; i++) {
                const instance = parking_spot_1.ParkingSpotFactory.getInstance(type);
                spots.get(type).push(instance);
            }
        });
        this.spots = spots;
    }
    getParkingTicket(vehicle, gate) {
        const entrance = gate.entrance;
        return entrance.getTicket(vehicle, this.spots, this.usedSpots, gate);
    }
    removeVehicle(ticket) {
        const exit = ticket.gate.exit;
        const amount = exit.removeVehicle(ticket, this.spots, this.usedSpots);
        return amount;
    }
    getGates() {
        return this.gates;
    }
}
exports.default = ParkingLot;
