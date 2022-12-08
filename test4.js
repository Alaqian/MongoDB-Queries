const connection = new Mongo();
const db = connection.getDB('aaz7118_db');

print(`\n3. Extra Credit: 50 points`)
print(`1. 15 points: (historical-events.json): Count the number of events per year`)
db.meteorites.aggregate([
    { $addFields: { date: { $toDate: "$year" } } },
    { $group: { _id: { $year: "$date" }, count: { $sum: 1 } } }
  ]).forEach(printjson)

print(`\nempty line`)

db.meteorites.find().limit(5).forEach(printjsononeline)