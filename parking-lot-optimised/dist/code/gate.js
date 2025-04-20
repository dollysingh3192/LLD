"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gate = exports.GateManager = void 0;
const entrance_1 = __importDefault(require("./entrance"));
const exit_1 = __importDefault(require("./exit"));
class Gate {
    constructor(entrance, exit) {
        this.entrance = entrance;
        this.exit = exit;
    }
}
exports.Gate = Gate;
class GateManager {
    static getGates(count, parkingLot) {
        const pairs = [];
        for (let i = 0; i < count; i++) {
            const entrance = new entrance_1.default(i, parkingLot);
            const exit = new exit_1.default(i, parkingLot);
            pairs.push(new Gate(entrance, exit));
        }
        return pairs;
    }
}
exports.GateManager = GateManager;
