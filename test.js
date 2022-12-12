use aaz7118_db

db.city.findOne(
    {
      geolocation:
        { $near:
           {
             $geometry: { type: "Point",  coordinates: [ 34.76667,47.85 ] },
             
           }
        }
    }
 )