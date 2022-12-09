/* {

INTSTRUCTIONS:
--------------

To run this script, make sure you run this on command prompt to import the data:
mongoimport --db aaz7118_db --collection restaurants --file restaurants.json

You can then run the script using this command:
mongo <q2.js

NOTE: I could only get `mongo <q2.js` to work on command prompt. It did not work on bash or PowerShell

Running in command prompt cuts off some of the output so the pdf contains full outputs

} */

print("\nINTSTRUCTIONS:")
print("--------------")
print("\nTo run this script, make sure you run this on command prompt to import the data:")
print("mongoimport --db aaz7118_db --collection restaurants --file restaurants.json\n")
print("You can then run the script using this command:")
print("mongo <q2.js\n")
print("NOTE: I could only get `mongo <q2.js` to work on command prompt. It did not work on bash or PowerShell\n")
print("Running in command prompt cuts off some of the output so the pdf contains full outputs\n")

// Switching to aaz7118_db
use aaz7118_db
show collections
db
// 2. Write MongoDB queries for (4 points each): 100 points
print("\n2. Write MongoDB queries for (4 points each): 100 points")
print("\n1. Count the number of documents in the collection.")
print("\nquery: \noutput:\n")
db.meteorites.aggregate([
  { $addFields: { date: { $toDate: "$year" } } },
  { $group: { _id: { $year: "$date" }, count: { $sum: 1 } } }
]).forEach(printjson)