/* {

INTSTRUCTIONS:
--------------

To run this script, make sure you run this on command prompt to import the data:
mongoimport --db aaz7118_db --collection restaurants --file restaurants.json

You can then run the script using this command:
mongo <q2.js

NOTE: I could only get `mongo <q2.js` to work on command prompt. It did not work on bash or PowerShell

Running in command prompt cuts off some of the output so the pdf contains full outputs

This was completed using MongoDB shell version v4.2.23

} */

print("\nINTSTRUCTIONS:")
print("--------------")
print("\nTo run this script, make sure you run this on command prompt to import the data:")
print("mongoimport --db aaz7118_db --collection restaurants --file restaurants.json\n")
print("You can then run the script using this command:")
print("mongo <q2.js\n")
print("NOTE: I could only get `mongo <q2.js` to work on command prompt. It did not work on bash or PowerShell\n")
print("Running in command prompt cuts off some of the output so the pdf contains full outputs\n")
print("This was completed using MongoDB shell version v4.2.23")
print("--------------\n")

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
print("> db.restaurants.find().pretty()")
db.restaurants.find().pretty()

// 3. Display: restaurant_id, name, borough and cuisine for all the documents
print("\n3. Display: restaurant_id, name, borough and cuisine for all the documents\n")
print("> db.restaurants.find( { }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 } ).pretty()")
db.restaurants.find( { }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 } ).pretty()

// 4. Display: restaurant_id, name, borough and cuisine, but exclude field _id, for all the documents in the collection
print("\n4. Display: restaurant_id, name, borough and cuisine, but exclude field _id, for all the documents in the collection\n")
print("> db.restaurants.find( { }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 } ).pretty()")
db.restaurants.find( { }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 } ).pretty()

// 5. Display: restaurant_id, name, borough and zip code, exclude the field _id for all the documents in the collection
print("\n5. Display: restaurant_id, name, borough and zip code, exclude the field _id for all the documents in the collection\n")
print("> db.restaurants.find( { }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, \"address.zipcode\": 1 } ).pretty()")
db.restaurants.find( { }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1 } ).pretty()

    // 6. Display all the restaurants in the Bronx
print("\n6. Display all the restaurants in the Bronx\n")
print("> db.restaurants.find({ borough: \"Bronx\" }).pretty()")
db.restaurants.find({ borough: "Bronx" }).pretty()

// 7. Display the first 5 restaurants in the Bronx
print("\n7. Display the first 5 restaurants in the Bronx\n")
print("> db.restaurants.find({ borough: \"Bronx\" }).limit(5).pretty()")
db.restaurants.find({ borough: "Bronx" }).limit(5).pretty()

// 8. Display the second 5 restaurants (skipping the first 5) in the Bronx
print("\n8. Display the second 5 restaurants (skipping the first 5) in the Bronx\n")
print("> db.restaurants.find({ borough: \"Bronx\" }.limit(5).skip(5).pretty()")
db.restaurants.find({ borough: "Bronx" }).skip(5).limit(5).pretty()

// 9. Find the restaurants with a score more than 85. 
print("\n9. Find the restaurants with a score more than 85\n")
print("> db.restaurants.find({ \"grades.score\": { $gt: 85 } }).pretty()")
db.restaurants.find({ "grades.score": { $gt: 85 } }).pretty()

// 10. Find the restaurants that achieved a score, more than 80 but less than 100. 
print("\n10. Find the restaurants that achieved a score, more than 80 but less than 100\n")
print("> db.restaurants.find({ grades: { $elemMatch: { score: { $gt: 80, $lte: 100 } } } }).pretty()")
db.restaurants.find({ "grades.score": { $gt: 80, $lt: 100 } }).pretty()

// 11. Find the restaurants which locate in longitude value less than -95.754168
print("\n11. Find the restaurants which locate in longitude value less than -95.754168\n")
print("> db.restaurants.find({ \"address.coord.1\": { $lt: -95.754168 } }).pretty()")
db.restaurants.find({ "address.coord.0": { $lt: -95.754168 } }).pretty()

// 12. Find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and longitude less than -65.754168
print("\n12. Find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and longitude less than -65.754168\n")
print("> db.restaurants.find({ $and: [cuisine: { $ne: \"American \" }, \"address.coord.0\": { $lt: -65.754168 }, \"grades.score\": { $gt: 70 }] }).pretty()")
db.restaurants.find({ 
    $and: [
        { cuisine: { $ne: "American " } }, 
        { "address.coord.0": { $lt: -65.754168 } }, 
        { "grades.score": { $gt: 70 } }
    ] 
}).pretty()

// 13. Find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than -65.754168. (without using $and operator)
print("\n13. Find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than -65.754168. (without using $and operator)\n")
print("> db.restaurants.find({ $nor: [ cuisine: { \"American \" }, \"address.coord.0\": { $gte: -65.754168 }, \"grades.score\": { $lte: 70 }] }).pretty()")
db.restaurants.find({ 
    $nor: [
        { cuisine: "American " }, 
        { "address.coord.0": { $gte: -65.754168 } }, 
        { "grades.score": {$not: { $gt: 70 }}}
    ] 
}).pretty()