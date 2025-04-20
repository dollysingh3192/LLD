"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CostComputation = void 0;
class CostComputation {
    constructor() {
        this.currentStrategy = new SecondsBasedPricingStrategy();
    }
    getCurrentStrategy() {
        return this.currentStrategy;
    }
}
exports.CostComputation = CostComputation;
class HourltPricingStrategy {
    price(ticket) {
        const currTime = new Date();
        const entryTime = ticket.entryTime;
        const durationMs = entryTime.getTime() - currTime.getTime(); // difference in ms
        const durationHours = Math.ceil(durationMs / (1000 * 60 * 60));
        const ratePerHour = 50;
        const totalFare = durationHours * ratePerHour;
        return totalFare;
    }
}
class MinuteBasedPricingStrategy {
    price(ticket) {
        const currTime = new Date();
        const entryTime = ticket.entryTime;
        const durationMs = currTime.getTime() - entryTime.getTime();
        const durationMinutes = Math.ceil(durationMs / (1000 * 60));
        const ratePerMinute = 10;
        const totalFare = durationMinutes * ratePerMinute;
        return totalFare;
    }
}
class SecondsBasedPricingStrategy {
    price(ticket) {
        const currTime = new Date();
        const entryTime = ticket.entryTime;
        const durationMs = currTime.getTime() - entryTime.getTime();
        const durationMinutes = Math.ceil(durationMs / (1000));
        const ratePerMinute = 10;
        const totalFare = durationMinutes * ratePerMinute;
        return totalFare;
    }
}
