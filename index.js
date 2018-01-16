let store = {drivers: [], passengers: [], trips: []};

let driver_id = 0;

class Driver {
  constructor (name) {
    this.id = ++driver_id;
    this.name = name;

    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(function (trip) {
      return trip.driverId === this.id;
    }.bind(this))
  }

  passengers() {
    return this.trips().map(function (trip) {
      return trip.passenger()
    })
}

let passenger_id = 0;

class Passenger {
  constructor (name) {
    this.id = ++passenger_id;
    this.name = name

    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(function (trip) {
      return trip.passengerId === this.id;
    }.bind(this))
  }
}

let trip_id = 0;

class Trip {
  constructor (driver, passenger) {
    this.id = ++trip_id;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this)
  }

  passenger(){
    return store.passengers.find(function (passenger) {
      return passenger.id === this.passengerId
    }.bind(this))
  }

  driver(){
    return store.drivers.find(function (driver) {
      return driver.id === this.driverId
    }.bind(this))
  }
}
