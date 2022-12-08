// Instructions to run this file:
print("\nINTSTRUCTIONS:")
print("--------------")
print("\nTo run this script, make sure you run this on command prompt to import the data:")
print("mongoimport --db aaz7118_db --collection restaurants --file restaurants.json\n")
print("You can then run the script using this command:")
print("mongo <q2.js\n")
print("NOTE: I could only get `mongo <q2.js` to work on command prompt. It did not work on bash or power shell\n")

// Switching to 
use aaz7118_db
db.restaurants.find()