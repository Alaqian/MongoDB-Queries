use aaz7118_db

// Add GeoJSON field "geolocation" from lng and lat
// Source: https://julien-bouffard.medium.com/convert-json-latitude-and-longitude-to-geojson-data-in-mongodb-4-x-415e6f1c4632
{/*db.metcity.find().forEach(function(element) {
    element.geolocation = {
        "type": "Point", 
        "coordinates": [ element.lng, element.lat ]
    };
    element.type = "city"
    db.metcity.save(element);
});*/}

db.runCommand(
    {
        update: 'city',
        updates: [
            {
                q: {}, // query selector to match all documents in collection
                u: [ // update of each matched document
                    {
                        $set: {
                            type: "city",
                            geolocation: {
                                "type": "Point",
                                "coordinates": ["$lng", "$lat"]
                            },
                            
                        }
                    },
                ],
                multi: true
            }
        ]
    }
)

db.city.createIndex({ geolocation: "2dsphere" })

db.meteor.createIndex({ geolocation: "2dsphere" })