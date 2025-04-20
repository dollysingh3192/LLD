"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DisplayBoard {
    constructor(id, spots, usedSpots) {
        this.id = id;
        this.spots = spots;
        this.usedSpots = usedSpots;
    }
    status() {
        return this;
    }
}
exports.default = DisplayBoard;
