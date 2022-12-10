use aaz7118_db

var cursor = db.meteorites.find({
  fall: "Found"
}).sort({
  geolocation: {
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [ longitude, latitude ]
      }
    }
  }
});

var nearestCity = results[0].city;
