/* {

INTSTRUCTIONS:
--------------

To run this script, make sure you run this on command prompt to import the data:
mongoimport --db aaz7118_db --collection restaurants --file restaurants.json

edit the above command at `--file <file relative path>` if the file is another directory or has another name.

You can then run the script using this command:
`mongo <q2_pretty_verbose.js`

There are other versions of this script:
- q2_pretty_quiet.js: uses .pretty() to reformat output - without printed comments,
- q2_quiet.js: does not use .pretty() to reformat output - without printed comments,
- q2_verbose.js: does not use .pretty() to reformat output - with printed comments

The output of running q2_pretty_verbose has been copied into q2.pdf with indexing for each query.

NOTE: I could only get `mongo <q2_pretty_verbose.js` to work on command prompt. It did not work on bash or PowerShell.

This was completed using MongoDB shell version v4.2.23
--------------

} */

print("\nINTSTRUCTIONS:")
print("--------------")
print("\nTo run this script, make sure you run this on command prompt to import the data:")
print("`mongoimport --db aaz7118_db --collection restaurants --file restaurants.json\n`")
print("edit the above command at `--file <file relative path>` if the file is another directory or has another name.\n")
print("You can then run the script using this command:")
print("`mongo <q2_pretty_verbose.js`\n")
print("There are other versions of this script:")
print("- q2_pretty_quiet.js: uses .pretty() to reformat output - without printed comments,")
print("- q2_quiet.js: does not use .pretty() to reformat output - without printed comments,")
print("- q2_verbose.js: does not use .pretty() to reformat output - with printed comments")
print("\nThe output of running q2_pretty_verbose.js has been copied into q2.pdf with indexing for each query.\n")
print("NOTE: I could only get `mongo <q2_pretty.js` to work on command prompt. It did not work on bash or PowerShell.\n")
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
print("> db.restaurants.find({ borough: \"Bronx\" }).limit(5).skip(5).pretty()")
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
print("> db.restaurants.find({ \"address.coord.0\": { $lt: -95.754168 } }).pretty()")
db.restaurants.find({ "address.coord.0": { $lt: -95.754168 } }).pretty()

// 12. Find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and longitude less than -65.754168
print("\n12. Find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and longitude less than -65.754168\n")
print("> db.restaurants.find({ $and: [{ cuisine: { $ne: \"American \" } }, { \"address.coord.0\": { $lt: -65.754168 } }, { \"grades.score\": { $gt: 70 } }] }).pretty()")
db.restaurants.find({ 
    $and: [
        { cuisine: { $ne: "American " } }, 
        { "address.coord.0": { $lt: -65.754168 } }, 
        { "grades.score": { $gt: 70 } }
    ] 
}).pretty()

// 13. Find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than -65.754168. (without using $and operator)
print("\n13. Find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than -65.754168. (without using $and operator)\n")
print("> db.restaurants.find({ $nor: [{ cuisine: \"American \" }, { \"address.coord.0\": { $gte: -65.754168 } }, { \"grades.score\": {$not: { $gt: 70 }}}] }).pretty()")
db.restaurants.find({ 
    $nor: [
        { cuisine: "American " }, 
        { "address.coord.0": { $gte: -65.754168 } }, 
        { "grades.score": {$not: { $gt: 70 }}}
    ] 
}).pretty()

// 14. Find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' and not in the borough of Brooklyn, sorted by cuisine in descending order.
print("\n14. Find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' and not in the borough of Brooklyn, sorted by cuisine in descending order.\n")
print("> db.restaurants.find({cuisine: { $ne: \"American \" }, \"grades.grade\": \"A\", borough: { $ne: \"Brooklyn\" }}).sort( { cuisine: -1 } ).pretty()")
db.restaurants.find({
    cuisine: { $ne: "American " },
    "grades.grade": "A",
    borough: { $ne: "Brooklyn" }
}).sort( { cuisine: -1 } ).pretty()

// 15. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name.
print("\n 15. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name.\n")
print("> db.restaurants.find({name: {$regex: /^Wil/}}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).pretty()")
db.restaurants.find({
    name: {$regex: /^Wil/}
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
}).pretty()

// 16. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name.
print("\n16. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name.\n")
print("> db.restaurants.find({name: {$regex: /ces$/}}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).pretty()")
db.restaurants.find({
    name: {$regex: /ces$/}
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
}).pretty()

// 17. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name.
print("\n17. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name.\n")
print("> db.restaurants.find({name: {$regex: /Reg/}}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).pretty()")
db.restaurants.find({
    name: {$regex: /Reg/}
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
}).pretty()

// 18. Find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish
print("\n18. Find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish\n")
print("db.restaurants.find({ borough: \"Bronx\", $or: [ {cuisine: \"American \"}, {cuisine: \"Chinese\"} ] }).pretty()")
db.restaurants.find({
    borough: "Bronx",
    $or: [
        {cuisine: "American "},
        {cuisine: "Chinese"}
    ]
}).pretty()

// 19. Find the restaurant Id, name, borough and cuisine for those restaurants which belong to the boroughs of Staten Island or Queens or Bronx or Brooklyn.
print("\n19. Find the restaurant Id, name, borough and cuisine for those restaurants which belong to the boroughs of Staten Island or Queens or Bronx or Brooklyn.\n")
print("> db.restaurants.find({ borough: {$in: [\"Staten Island\", \"Queens\", \"Bronx\", \"Brooklyn\"]} }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).pretty()")
db.restaurants.find({
    borough: {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
}).pretty()

// 20. Find the restaurant Id, name, borough and cuisine for those restaurants which are not belonging to the borough Staten Island or Queens or Bronx or Brooklyn
print("\n20. Find the restaurant Id, name, borough and cuisine for those restaurants which are not belonging to the borough Staten Island or Queens or Bronx or Brooklyn\n")
print("> db.restaurants.find({ borough: {$nin: [\"Staten Island\", \"Queens\", \"Bronx\", \"Brooklyn\"]} }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).pretty()")
db.restaurants.find({
    borough: {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
}).pretty()

// 21. Find the restaurant Id, name, borough and cuisine for those restaurants which achieved a score below 10.
print("\n21. Find the restaurant Id, name, borough and cuisine for those restaurants which achieved a score below 10.\n")
print("> db.restaurants.find({ \"grades.score\": {$lt: 10} }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).pretty()")
db.restaurants.find({
    "grades.score": {$lt: 10}
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
}).pretty() 

// 22. Find the restaurant Id, name, borough and cuisine for those restaurants which prepared dish except 'American' and 'Chinese' or restaurant's name begins with letter 'Wil'.
print("\n22. Find the restaurant Id, name, borough and cuisine for those restaurants which prepared dish except 'American' and 'Chinese' or restaurant's name begins with letter 'Wil'.\n")
print("db.restaurants.find({ $and: [ {cuisine: {$ne: \"American \"}}, {cuisine: {$ne: \"Chinese\"}}, {name: {$regex: /^Wil/}} ] }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).pretty()")
db.restaurants.find({
    $and: [
        {cuisine: {$ne: "American "}},
        {cuisine: {$ne: "Chinese"}},
        {name: {$regex: /^Wil/}}
    ]
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
}).pretty()

// 23. Find the restaurant Id, name, and grades for those restaurants which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates.
print("23. Find the restaurant Id, name, and grades for those restaurants which achieved a grade of \"A\" and scored 11 on an ISODate \"2014-08-11T00:00:00Z\" among many of survey dates.")
db.restaurants.find({
    grades: {
        $elemMatch: {
            grade: "A",
            score: 11,
            date: ISODate("2014-08-11T00:00:00Z")
        }
    }
}, {
    restaurant_id: 1,
    name: 1,
    grades: 1
}).pretty()

// 24. Find the restaurant Id, name and grades for those restaurants where the 2nd element of grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z"
print("\n24. Find the restaurant Id, name and grades for those restaurants where the 2nd element of grades array contains a grade of \"A\" and score 9 on an ISODate \"2014-08-11T00:00:00Z\"\n")
db.restaurants.find({
    "grades.1.grade":"A", 
    "grades.1.score" : 9,
    "grades.1.date": ISODate("2014-08-11T00:00:00Z")
}, {
    restaurant_id: 1,
    name: 1,
    grades: 1
}).pretty()

// 25. xFind the restaurant Id, name, address and geographical location for those restaurants where 2nd element of coord array contains a value which is more than 42 and up to 52.
print("\n25. xFind the restaurant Id, name, address and geographical location for those restaurants where 2nd element of coord array contains a value which is more than 42 and up to 52.\n")
db.restaurants.find({
    "address.coord.1": {$gt: 42, $lte: 52}
}, {
    restaurant_id: 1,
    name: 1,
    address: 1
}).pretty()
