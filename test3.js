const conn = new Mongo();
const db = conn.getDB('aaz7118_db');

// Get the count of documents in the "restaurants" collection
print(`${db.restaurants.find().limit(1)}`)