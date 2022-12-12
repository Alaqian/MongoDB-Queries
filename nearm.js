use aaz7118_db
//db.meteorites.find().limit(1)
// 1. Creat 2dsphere index
db.m.createIndex( { geolocation : "2dsphere" } )
//2. Find the distance to the nearest city
db.m.aggregate([
{
   $geoNear: {
      near: { type: "Point", coordinates: [ -113,54.21667 ] },
      distanceField: "dist.calculated",
      maxDistance: 200000,
      //query: { category: "Parks" },
      includeLocs: "dist.geolocation",
      spherical: false
   }
}
])

db.m.find({
   geolocation: {
     $near: {
       $geometry: {
         type: "Point",
         coordinates: [ -113,54.21667 ] 
      },
      $maxDistance: 50000
    }
  }
})  
