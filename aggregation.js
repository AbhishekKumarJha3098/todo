

db.persons.insertMany([
  {
    _id: 1,
    name: "John",
    age: 25,
    address: "123 Main St"
  },
  {
    _id: 2,
    name: "Jane",
    age: 35,
    address: "456 Main St"
  },
  {
    _id: 3,
    name: "Bob",
    age: 45,
    address: "789 Main St"
  },
  {
    _id: 4,
    name: "Alice",
    age: 55,
    address: "246 Main St"
  }
]);

db.zipcodes.insertMany([
  {
    _id: 1,
    address: "123 Main St",
    zipcode: "12345"
  },
  {
    _id: 2,
    address: "456 Main St",
    zipcode: "54321"
  },
  {
    _id: 3,
    address: "789 Main St",
    zipcode: "98765"
  },
  {
    _id: 4,
    address: "246 Main St",
    zipcode: "24680"
  }
]);

db.cities_states.insertMany([
  {
    _id: 1,
    zipcode: "12345",
    city: "New York",
    state: "NY"
  },
  {
    _id: 2,
    zipcode: "54321",
    city: "Chicago",
    state: "IL"
  },
  {
    _id: 3,
    zipcode: "98765",
    city: "Los Angeles",
    state: "CA"
  },
  {
    _id: 4,
    zipcode: "24680",
    city: "Miami",
    state: "FL"
  }
]);

db.states_countries.insertMany([
  {
    _id: 1,
    state: "NY",
    country: "USA"
  },
  {
    _id: 2,
    state: "IL",
    country: "USA"
  },
  {
    _id: 3,
    state: "CA",
    country: "USA"
  },
  {
    _id: 4,
    state: "FL",
    country: "USA"
  },
  {
    _id: 5,
    state: "MH",
    country: "India"
  },
  {
    _id: 6,
    state: "DL",
    country: "India"
  }
]);

db.persons.aggregate([
  {
    $lookup: {
      from: "zipcodes",
      localField: "address",
      foreignField: "address",
      as: "zip_info"
    }
  },
  {
    $unwind: "$zip_info"
  },
  {
    $lookup: {
      from: "cities_states",
      localField: "zip_info.zipcode",
      foreignField: "zipcode",
      as: "city_state_info"
    }
  },
  {
    $unwind: "$city_state_info"
  },
  {
    $lookup: {
      from: "states_countries",
      localField: "city_state_info.state",
      foreignField: "state",
      as: "country_info"
    }
  },
  {
    $unwind: "$country_info"
  },
  {
    $project: {
      _id: 1,
      name: 1,
      age: 1,
      address: 1,
      "zip_info.zipcode": 1,
      "city_state_info.city": 1,
      "city_state_info.state": 1,
      "country_info.country": 1
    }
  }
]);