use aaz7118_db

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
print()
use aaz7118_db

db.restaurants.find({
    $nor: [
        {$or: [{cuisine: "American "}, {cuisine: "Chinese"}]},
        {name: {$not: {$regex: /^Wil/}}}
    ]
}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
})
    

