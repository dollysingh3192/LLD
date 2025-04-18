import { Gate, GateManager } from "./gate";
import { ParkingSpotTypes, SpotsMap } from "./types";
import { ParkingSpotFactory } from "./parking-spot";
import DisplayBoard from "./display-board";
import { Vehicle } from "./vehicle";
import Ticket from "./ticket";

class ParkingLot {
  gates: Gate[];
  spots: SpotsMap;
  usedSpots;
  displayBoard
  constructor() {
    const gates = GateManager.getGates(2);
    this.gates = gates;

    this.spots = new Map();
    this.usedSpots = new Map();

    this.initializeSpots();

    this.displayBoard = new DisplayBoard(1, this.spots, this.usedSpots);
  }

  showBoard() {
    return this.displayBoard.status();
  }

  initializeSpots() {
    const inventory = [1, 5, 3, 1];
    const spotsInventory = {} as Record<string, number>;

    Object.values(ParkingSpotTypes).forEach((key, index) => {
    //   const enumKey = ParkingSpotTypes[key as keyof typeof ParkingSpotTypes];
      spotsInventory[key] = inventory[index];
    });

    const spots = new Map();

    Object.keys(spotsInventory).forEach((type ) => {
    //   const enumKey = ParkingSpotTypes[type as keyof typeof ParkingSpotTypes];
      if (!spots.has(type)) {
        spots.set(type, []);
      }

      const count = spotsInventory[type];
      for (let i = 0; i < count; i++) {
        const instance = ParkingSpotFactory.getInstance(type);
        spots.get(type).push(instance);
      }
    });

    this.spots = spots;
  }

  getParkingTicket(vehicle: Vehicle, gate: Gate) {
    const entrance = gate.entrance;
    return entrance.getTicket(vehicle, this.spots, this.usedSpots, gate);
  }

  removeVehicle(ticket: Ticket) {
    const exit = ticket.gate.exit;
    const amount = exit.removeVehicle(ticket, this.spots, this.usedSpots);
    return amount;
  }

  getGates() {
    return this.gates;
  }
}

export default ParkingLot;
