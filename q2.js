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
print("--------------")

// Switching to aaz7118_db
use aaz7118_db

// Question 2. Write MongoDB queries for (4 points each): 100 points
print("\nQuestion 2. Write MongoDB queries for (4 points each): 100 points")

// 1. Count the number of documents in the collection.
print("\n1. Count the number of documents in the collection.")
print("\n> db.restaurants.count()")
db.restaurants.count()

// 2. Display all the documents in the collection.
print("\n2. Display all the documents in the collection.\n")
print("> db.restaurants.find()")
db.restaurants.find()

// 3. Display: restaurant_id, name, borough and cuisine for all the documents
print("\n3. Display: restaurant_id, name, borough and cuisine for all the documents")
