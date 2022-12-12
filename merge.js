use aaz7118_db


//db.getCollection('city').aggregate( [
//    { $merge : { into: { coll: "meteor" }, on: "_id",  whenNotMatched: "insert" } }
// ])
//db.meteor.createIndex({ geolocation: "2dsphere" })
db.meteor.find(
  {
    geolocation: { $exists: true },
    year: {$gte: "1950-01-01T00:00:00.000"}
  }
).forEach(function(met) {
  var city = db.city.findOne(
    {
      geolocation:
        {
          $near :
            {
              $geometry: { type: "Point",  coordinates: met.geolocation.coordinates },
               
            }
        }
    }
  )
  print("{ meteor: " + met.name + ", year: " + met.year.substr(0,4) + ", geolocation: [" + met.geolocation.coordinates + "], city: " + city.city + ", state: " + city.admin_name + ", country: " + city.country + " geolocation: [" + city.geolocation.coordinates + "] }");
})

  