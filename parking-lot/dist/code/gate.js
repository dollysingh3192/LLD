"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gate = exports.GateManager = void 0;
const parking_spot_manager_js_1 = require("./parking-spot-manager.js");
const ticket_js_1 = __importDefault(require("./ticket.js"));
class Entrance {
    constructor(id) {
        this.id = id;
        this.parkingSpotManager = new parking_spot_manager_js_1.ParkingSpotManager();
    }
    getTicket(vehicle, spots, usedSpots, gate) {
        const data = this.parkingSpotManager.assignVehicleOnSpot(vehicle, spots, usedSpots);
        if (!data[0])
            return "No Space Available";
        const ticket = new ticket_js_1.default(new Date(), data[1], vehicle, gate);
        return ticket;
    }
}
class Exit {
    constructor(id) {
        this.id = id;
        this.parkingSpotManager = new parking_spot_manager_js_1.ParkingSpotManager();
    }
    validateTicket(ticket, spots, usedSpots) {
        this.parkingSpotManager.removeVehicleFromSpot(ticket.parkingSpot, spots, usedSpots);
    }
}
class Gate {
    constructor(entrance, exit) {
        this.entrance = entrance;
        this.exit = exit;
    }
}
exports.Gate = Gate;
class GateManager {
    static getGates(count) {
        const pairs = [];
        for (let i = 0; i < count; i++) {
            const entrance = new Entrance(i);
            const exit = new Exit(i);
            pairs.push(new Gate(entrance, exit));
        }
        return pairs;
    }
}
exports.GateManager = GateManager;
