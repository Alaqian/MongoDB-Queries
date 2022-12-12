use aaz7118_db

{/*
db.getCollection('').aggregate( [
    { $merge : { into: { coll: "coll-2" }, on: "_id",  whenNotMatched: "insert" } }
 ])use aaz7118_db
*/}// 1. Add locations
// 1. Add locations
//db.metcity.find().limit(5).skip(998)
// 1. Add locations
// 1. Add locations
// Define named function
function createUpdate(doc) {
    return {
      "updateOne": {
        "filter": { "_id": doc._id },
        "update": {
          "$set": {
            "geolocation": {
              "type": "Point",
              "coordinates": [doc.lng, doc.lat]
            },
            "type":"City"
          }
        }
      }
    };
  }
  
  // 1. Add locations
  var bulkOps = db.cities.aggregate([
    
    {
      "$map": createUpdate
    }
  ]).toArray();
  
  db.metcity.bulkWrite(bulkOps);
  
  


 
 // createIndex 2dsphere
 db.metcity.createIndex({ location: "2dsphere" })
 
 db.metcity.find().limit(5).skip(998)
 //db.cities.find().limit(5)