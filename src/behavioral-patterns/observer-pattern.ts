/**
 * OBSERVER PATTERN
 * Notes:
 *
 * - Pub/Sub mechanism
 * - notifies multiple objects (subscribers) about any events that happen to the object they're observing.
 */

enum Event {
  NEW_ITEM = 'NEW_ITEM',
  SALE = 'SALE',
}

interface EventListener {
  update(eventType: Event, message: string): void;
}

class EmailMsgListener implements EventListener {
  private readonly email: string;

  constructor(email: string) {
    this.email = email;
  }

  update(eventType: Event, message: string): void {
    // Actually send the mail
    if (eventType == Event.NEW_ITEM) {
      console.log('NEW ITEM!');
      console.log(message);
      console.log('---------------------');
    } else if (eventType == Event.SALE) {
      console.log('SALE!');
      console.log(message);
      console.log('---------------------');
    }
  }
}

class NotificationService {
  private readonly customers: Map<string, Array<EventListener>>;

  constructor() {
    this.customers = new Map<string, Array<EventListener>>();
    Object.keys(Event).forEach((event) => {
      this.customers.set(event, []);
    });
  }

  subscribe(eventType: Event, listener: EventListener) {
    this.customers.get(eventType)?.push(listener);
  }

  unsubscribe(eventType: Event, listener: EventListener) {
    const index = this.customers.get(eventType)?.indexOf(listener);
    if (index && index > -1) {
      this.customers.get(eventType)?.splice(index, 1);
    }
  }

  notify(eventType: Event, message: string) {
    this.customers.get(eventType)?.forEach((customer) => {
      customer.update(eventType, message);
    });
  }
}

class Store {
  private readonly notificationService: NotificationService;

  constructor() {
    this.notificationService = new NotificationService();
  }

  getNotificationService() {
    return this.notificationService;
  }

  newItemPromotion(item: string) {
    const notificationMessage = `${item} in stock!`;
    this.notificationService.notify(Event.NEW_ITEM, notificationMessage);
  }

  newSalePromotion(item: string) {
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

export const runObserverPattern = () => {
  main();
};
