use aaz7118_db

db.cities.find().limit(5)
// 1. Add locations
var bulkOps = db.cities.find().map(function(doc) {
    return {
        "updateOne" : {
            "filter" : { "_id" : doc._id },
            "update" : {
                "$set" : {  
                    "location" : {
                        "type" : "Point",
                        "geocoordinates" :  [doc.lng, doc.lat] 
                    }
                }       
            }
        }
    };
});

db.cities.bulkWrite(bulkOps);

// createIndex 2dsphere
db.cities.createIndex({ location: "2dsphere" })


// find near this coordinate
db.cities.findOne({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [48.2666, -13.4000]
        },
      }
    }
  })  

//db.cities.find().limit(5)