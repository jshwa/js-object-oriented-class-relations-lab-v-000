let driver_id = 0;

class Driver {
  constructor (name) {
    this.id = ++driver_id;
    this.name = name;
  }

  trips() {

  }
}

let passenger_id = 0;

class Passenger {
  constructor (name) {
    this.id = ++passenger_id;
    this.name = name
  }

}

let trip_id = 0;

class Trip {
  constructor (driverId, passengerId) {
    this.id = ++trip_id;
    this.driverId = driverId;
    this.passengerId = passengerId;
  }

}
