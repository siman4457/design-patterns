"use strict";
/**
 * OBSERVER PATTERN
 * Notes:
 *
 * - Pub/Sub mechanism
 * - notifies multiple objects (subscribers) about any events that happen to the object they're observing.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.runObserverPattern = void 0;
var Event;
(function (Event) {
    Event["NEW_ITEM"] = "NEW_ITEM";
    Event["SALE"] = "SALE";
})(Event || (Event = {}));
class EmailMsgListener {
    constructor(email) {
        this.email = email;
    }
    update(eventType, message) {
        // Actually send the mail
        if (eventType == Event.NEW_ITEM) {
            console.log('NEW ITEM!');
            console.log(message);
            console.log('---------------------');
        }
        else if (eventType == Event.SALE) {
            console.log('SALE!');
            console.log(message);
            console.log('---------------------');
        }
    }
}
class NotificationService {
    constructor() {
        this.customers = new Map();
        Object.keys(Event).forEach((event) => {
            this.customers.set(event, []);
        });
    }
    subscribe(eventType, listener) {
        var _a;
        (_a = this.customers.get(eventType)) === null || _a === void 0 ? void 0 : _a.push(listener);
    }
    unsubscribe(eventType, listener) {
        var _a, _b;
        const index = (_a = this.customers.get(eventType)) === null || _a === void 0 ? void 0 : _a.indexOf(listener);
        if (index && index > -1) {
            (_b = this.customers.get(eventType)) === null || _b === void 0 ? void 0 : _b.splice(index, 1);
        }
    }
    notify(eventType, message) {
        var _a;
        (_a = this.customers.get(eventType)) === null || _a === void 0 ? void 0 : _a.forEach((customer) => {
            customer.update(eventType, message);
        });
    }
}
class Store {
    constructor() {
        this.notificationService = new NotificationService();
    }
    getNotificationService() {
        return this.notificationService;
    }
    newItemPromotion(item) {
        const notificationMessage = `${item} in stock!`;
        this.notificationService.notify(Event.NEW_ITEM, notificationMessage);
    }
    newSalePromotion(item) {
        const notificationMessage = `${item} is 30% off!`;
        this.notificationService.notify(Event.SALE, notificationMessage);
    }
}
const main = () => {
    const store = new Store();
    const subscriber = new EmailMsgListener('siman@gmail.com');
    const notificationService = store.getNotificationService();
    notificationService.subscribe(Event.NEW_ITEM, subscriber);
    notificationService.subscribe(Event.SALE, subscriber);
    store.newItemPromotion('hacky sacks'); // Add a new item to the store
    store.newSalePromotion('soccer balls');
};
const runObserverPattern = () => {
    main();
};
exports.runObserverPattern = runObserverPattern;
