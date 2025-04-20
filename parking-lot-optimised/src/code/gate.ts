import Entrance from "./entrance";
import Exit from "./exit";
import ParkingLot from "./parking-lot";

class Gate {
    entrance: Entrance;
    exit: Exit;
    constructor(entrance: Entrance, exit: Exit) {
        this.entrance = entrance;
        this.exit = exit;
    }
}

class GateManager {

    static getGates(count: number, parkingLot: ParkingLot) {
        const pairs: Gate[] = [];
        for (let i = 0; i < count; i++) {
            const entrance = new Entrance(i, parkingLot);
            const exit = new Exit(i, parkingLot);
            pairs.push(new Gate(entrance, exit));
        }

        return pairs;
    }
}

export { GateManager, Gate };