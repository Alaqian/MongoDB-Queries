/* Instructions to run this file:

To run this script, make sure you run this on command prompt to import the data:
mongoimport --db aaz7118_db --collection restaurants --file restaurants.json

You can then run the script using this command:
mongo <q2.js

NOTE: I could only get `mongo <q2.js` to work on command prompt. It did not work on bash or power shell
*/

print("\nINTSTRUCTIONS:")
print("--------------")
print("\nTo run this script, make sure you run this on command prompt to import the data:")
print("mongoimport --db aaz7118_db --collection restaurants --file restaurants.json\n")
print("You can then run the script using this command:")
print("mongo <q2.js\n")
print("NOTE: I could only get `mongo <q2.js` to work on command prompt. It did not work on bash or PowerShell\n")
print("Running in command prompt cuts off some of the output \n")

// Switching to aaz7118_db
use aaz7118_db
db.restaurants.drop()

db.meteorites.drop()

db.meteorites.aggregate([
    { $addFields: { date: { $toDate: "$year" } } },
    { $group: { _id: { $year: "$date" }, count: { $sum: 1 } } }
  ]).forEach(printjson)