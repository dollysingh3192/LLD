import Ticket from "./ticket";

class CostComputation {
    currentStrategy: PricingStrategy;
    constructor() {
        this.currentStrategy = new SecondsBasedPricingStrategy();
    }

    getCurrentStrategy() {
        return this.currentStrategy;
    }
}

interface PricingStrategy {
    price(ticket: Ticket): void
}

class HourltPricingStrategy implements PricingStrategy {
    price(ticket: Ticket) {
        const currTime = new Date();
        const entryTime = ticket.entryTime;
        const durationMs = entryTime.getTime() - currTime.getTime(); // difference in ms
        const durationHours = Math.ceil(durationMs / (1000 * 60 * 60));
        const ratePerHour = 50;
        const totalFare = durationHours * ratePerHour;
        return totalFare;
    }
}

class MinuteBasedPricingStrategy implements PricingStrategy {
    price(ticket: Ticket) {
        const currTime = new Date();
        const entryTime = ticket.entryTime;
        const durationMs = currTime.getTime() - entryTime.getTime();
        const durationMinutes = Math.ceil(durationMs / (1000 * 60));
        const ratePerMinute = 10;
        const totalFare = durationMinutes * ratePerMinute;
        return totalFare;
    }
}

class SecondsBasedPricingStrategy implements PricingStrategy {
    price(ticket: Ticket) {
        const currTime = new Date();
        const entryTime = ticket.entryTime;
        const durationMs = currTime.getTime() - entryTime.getTime();
        const durationMinutes = Math.ceil(durationMs / (1000));
        const ratePerMinute = 10;
        const totalFare = durationMinutes * ratePerMinute;
        return totalFare;
    }
}

export { PricingStrategy, CostComputation };