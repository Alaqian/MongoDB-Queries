// Switching to aaz7118_db
use aaz7118_db

// Question 2. Write MongoDB queries for (4 points each): 100 points
// 1. Count the number of documents in the collection.
db.restaurants.count()

// 2. Display all the documents in the collection.
db.restaurants.find().pretty()

// 3. Display: restaurant_id, name, borough and cuisine for all the documents
db.restaurants.find( { }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 } ).pretty()

// 4. Display: restaurant_id, name, borough and cuisine, but exclude field _id, for all the documents in the collection
db.restaurants.find( { }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 } ).pretty()

// 5. Display: restaurant_id, name, borough and zip code, exclude the field _id for all the documents in the collection
db.restaurants.find( { }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1 } ).pretty()

    // 6. Display all the restaurants in the Bronx
db.restaurants.find({ borough: "Bronx" }).pretty()

// 7. Display the first 5 restaurants in the Bronx
db.restaurants.find({ borough: "Bronx" }).limit(5).pretty()

// 8. Display the second 5 restaurants (skipping the first 5) in the Bronx
db.restaurants.find({ borough: "Bronx" }).skip(5).limit(5).pretty()

// 9. Find the restaurants with a score more than 85.
db.restaurants.find({ "grades.score": { $gt: 85 } }).pretty()

// 10. Find the restaurants that achieved a score, more than 80 but less than 100.
db.restaurants.find({ "grades.score": { $gt: 80, $lt: 100 } }).pretty()

// 11. Find the restaurants which locate in longitude value less than -95.754168
db.restaurants.find({ "address.coord.0": { $lt: -95.754168 } }).pretty()

// 12. Find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and longitude less than -65.754168
db.restaurants.find({ 
    $and: [
        { cuisine: { $ne: "American " } }, 
        { "address.coord.0": { $lt: -65.754168 } }, 
        { "grades.score": { $gt: 70 } }
    ] 
}).pretty()

// 13. Find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than -65.754168. (without using $and operator)
db.restaurants.find({ 
    $nor: [
        { cuisine: "American " }, 
        { "address.coord.0": { $gte: -65.754168 } }, 
        { "grades.score": {$not: { $gt: 70 }}}
    ] 
}).pretty()

// 14. Find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' and not in the borough of Brooklyn, sorted by cuisine in descending order.
db.restaurants.find({
    cuisine: { $ne: "American " },
    "grades.grade": "A",
    borough: { $ne: "Brooklyn" }
}).sort( { cuisine: -1 } ).pretty()

// 15. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name.
db.restaurants.find({
    name: {$regex: /^Wil/}
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
}).pretty()

// 16. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name.
db.restaurants.find({
    name: {$regex: /ces$/}
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
}).pretty()

// 17. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name.
db.restaurants.find({
    name: {$regex: /Reg/}
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
}).pretty()

// 18. Find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish
db.restaurants.find({
    borough: "Bronx",
    $or: [
        {cuisine: "American "},
        {cuisine: "Chinese"}
    ]
}).pretty()

// 19. Find the restaurant Id, name, borough and cuisine for those restaurants which belong to the boroughs of Staten Island or Queens or Bronx or Brooklyn.
db.restaurants.find({
    borough: {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
}).pretty()

// 20. Find the restaurant Id, name, borough and cuisine for those restaurants which are not belonging to the borough Staten Island or Queens or Bronx or Brooklyn
db.restaurants.find({
    borough: {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
}).pretty()

// 21. Find the restaurant Id, name, borough and cuisine for those restaurants which achieved a score below 10.
