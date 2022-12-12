/* {

INTSTRUCTIONS:
--------------

To run this script, make sure you run this on command prompt to import the data:
mongoimport --db aaz7118_db --collection restaurants --file restaurants.json

edit the above command at `--file <file relative path>` if the file is another directory or has another name.

You can then run the script using this command:
`mongo <q2_quiet.js`

There are other versions of this script:
- q2_pretty_verbose.js: uses .pretty() to reformat output - with printed comments,
- q2_pretty_quiet.js: uses .pretty() to reformat output - without printed comments,
- q2_verbose.js: does not use .pretty() to reformat output - with printed comments

The output of running q2_pretty_verbose.js has been copied into "aaz7118_Assignment_4.pdf" with indexing for each query.

NOTE: I could only get `mongo <q2_pretty_quiet.js` to work on command prompt. It did not work on bash or PowerShell.

This was completed using MongoDB shell version v4.2.23
--------------

} */

// Switching to aaz7118_db
use aaz7118_db

// Question 2. Write MongoDB queries for (4 points each): 100 points
// 1. Count the number of documents in the collection.
db.restaurants.count()

// 2. Display all the documents in the collection.
db.restaurants.find()

// 3. Display: restaurant_id, name, borough and cuisine for all the documents
db.restaurants.find( { }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 } )

// 4. Display: restaurant_id, name, borough and cuisine, but exclude field _id, for all the documents in the collection
db.restaurants.find( { }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 } )

// 5. Display: restaurant_id, name, borough and zip code, exclude the field _id for all the documents in the collection
db.restaurants.find( { }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1 } )

    // 6. Display all the restaurants in the Bronx
db.restaurants.find({ borough: "Bronx" })

// 7. Display the first 5 restaurants in the Bronx
db.restaurants.find({ borough: "Bronx" }).limit(5)

// 8. Display the second 5 restaurants (skipping the first 5) in the Bronx
db.restaurants.find({ borough: "Bronx" }).skip(5).limit(5)

// 9. Find the restaurants with a score more than 85.
db.restaurants.find({ "grades.score": { $gt: 85 } })

// 10. Find the restaurants that achieved a score, more than 80 but less than 100.
db.restaurants.find({ "grades.score": { $gt: 80, $lt: 100 } })

// 11. Find the restaurants which locate in longitude value less than -95.754168
db.restaurants.find({ "address.coord.0": { $lt: -95.754168 } })

// 12. Find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and longitude less than -65.754168
db.restaurants.find({ 
    $and: [
        { cuisine: { $ne: "American " } }, 
        { "address.coord.0": { $lt: -65.754168 } }, 
        { "grades.score": { $gt: 70 } }
    ] 
})

// 13. Find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than -65.754168. (without using $and operator)
db.restaurants.find({ 
    $nor: [
        { cuisine: "American " }, 
        { "address.coord.0": { $gte: -65.754168 } }, 
        { "grades.score": {$not: { $gt: 70 }}}
    ] 
})

// 14. Find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' and not in the borough of Brooklyn, sorted by cuisine in descending order.
db.restaurants.find({
    cuisine: { $ne: "American " },
    "grades.grade": "A",
    borough: { $ne: "Brooklyn" }
}).sort( { cuisine: -1 } )

// 15. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name.
db.restaurants.find({
    name: {$regex: /^Wil/}
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
})

// 16. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name.
db.restaurants.find({
    name: {$regex: /ces$/}
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
})

// 17. Find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name.
db.restaurants.find({
    name: {$regex: /Reg/}
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
})

// 18. Find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish
db.restaurants.find({
    borough: "Bronx",
    $or: [
        {cuisine: "American "},
        {cuisine: "Chinese"}
    ]
})

// 19. Find the restaurant Id, name, borough and cuisine for those restaurants which belong to the boroughs of Staten Island or Queens or Bronx or Brooklyn.
db.restaurants.find({
    borough: {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
})

// 20. Find the restaurant Id, name, borough and cuisine for those restaurants which are not belonging to the borough Staten Island or Queens or Bronx or Brooklyn
db.restaurants.find({
    borough: {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
})

// 21. Find the restaurant Id, name, borough and cuisine for those restaurants which achieved a score below 10.
db.restaurants.find({
    "grades.score": {$lt: 10}
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
})

// 22. Find the restaurant Id, name, borough and cuisine for those restaurants which prepared dish except 'American' and 'Chinese' or restaurant's name begins with letter 'Wil'.
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
})

// 23. Find the restaurant Id, name, and grades for those restaurants which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates.
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
})

// 24. Find the restaurant Id, name and grades for those restaurants where the 2nd element of grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z"
db.restaurants.find({
    "grades.1.grade":"A", 
    "grades.1.score" : 9,
    "grades.1.date": ISODate("2014-08-11T00:00:00Z")
}, {
    restaurant_id: 1,
    name: 1,
    grades: 1
})

// 25. Find the restaurant Id, name, address and geographical location for those restaurants where 2nd element of coord array contains a value which is more than 42 and up to 52.
db.restaurants.find({
    "address.coord.1": {$gt: 42, $lte: 52}
}, {
    restaurant_id: 1,
    name: 1,
    address: 1
})