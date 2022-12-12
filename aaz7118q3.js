{/*

INTSTRUCTIONS:
--------------

To run this script, make sure you run this on command prompt to import the data:
1. `mongoimport --db aaz7118_db --collection events --file historical-events.json`
2. `mongoimport --db aaz7118_db --collection meteor --file meteorites.json`
3. `mongoimport --db aaz7118_db --collection city --type csv --headerline --file worldcities.csv`

edit the above command at `--file <file relative path>` if the file is another directory or has another name.

You can then run the script using this command:
`mongo <aaz7118q3.js`

The output of running this script has been copied into "aaz7118_Assignment_4.pdf" with indexing for each query.

NOTE: I could only get `mongo <aaz7118q3.js` to work on command prompt. It did not work on bash or PowerShell.

This was completed using MongoDB shell version v4.2.23
--------------

*/}

// 3. Extra Credit: 50 points
print("\n3. Extra Credit: 50 points\n")
print("\nINTSTRUCTIONS:")
print("--------------")
print("\nTo run this script, make sure you run this on command prompt to import the data:")
print("1. `mongoimport --db aaz7118_db --collection events --file historical-events.json`")
print("2. `mongoimport --db aaz7118_db --collection meteor --file meteorites.json`")
print("3. `mongoimport --db aaz7118_db --collection city --type csv --headerline --file worldcities.csv`")
print("\nedit the above command at `--file <file relative path>` if the file is another directory or has another name.\n")
print("You can then run the script using this command:")
print("`mongo <aaz7118q3.js`\n")
print("The output of running q2_verbose.js has been copied into \"aaz7118_Assignment_4.pdf\" with indexing for each query.\n")
print("NOTE: I could only get `mongo <aaz7118q3.js` to work on command prompt. It did not work on bash or PowerShell.\n")
print("This was completed using MongoDB shell version v4.2.23")
print("--------------\n")


use aaz7118_db

// 1. 15 points: (events.json): Count the number of events per year.
print("\n1. 15 points: (events.json): Count the number of events per year.\n")
db.events.aggregate([
  {
    $addFields: {
      year: {
        $cond: [
          { $gt: [{ $strLenBytes: "$date" }, 4] },
          { $toInt: { $arrayElemAt: [{ $split: ["$date", "/"] }, 0] } },
          { $toInt: "$date" }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$year",
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])

// 2. 25 points: (meteorites.json, worldcities.csv): Use the MongoDB geospatial facilities to find the nearest city to each meteorite “fallen” (not found) since the year 1950, inclusive.
print("\n2. 25 points: (meteorites.json, worldcities.csv): Use the MongoDB geospatial facilities to find the nearest city to each meteorite “fallen” (not found) since the year 1950, inclusive.\n")

// Add GeoJSON field "geolocation" from lng and lat
// Source: https://julien-bouffard.medium.com/convert-json-latitude-and-longitude-to-geojson-data-in-mongodb-4-x-415e6f1c4632
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

// create 2dsphere indexes
db.city.createIndex({ geolocation: "2dsphere" })
db.meteor.createIndex({ geolocation: "2dsphere" })

// For each meteor with a geolocation and year >= 1950, find nearest city
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