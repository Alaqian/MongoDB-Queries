{/*

INTSTRUCTIONS:
--------------

To run this script, make sure you run this on command prompt to import the data:
1. `mongoimport --db aaz7118_db --collection events --file historical-events.json`
2. `mongoimport --db aaz7118_db --collection meteorites --file meteorites.json`
3. `mongoimport --db aaz7118_db --collection cities --type csv --headerline --file worldcities.csv`

edit the above command at `--file <file relative path>` if the file is another directory or has another name.

You can then run the script using this command:
`mongo <q3.js`

NOTE: I could only get `mongo <q3.js` to work on command prompt. It did not work on bash or PowerShell.

This was completed using MongoDB shell version v4.2.23
--------------

*/}

print("\nINTSTRUCTIONS:")
print("--------------")
print("\nTo run this script, make sure you run this on command prompt to import the data:")
print("1. `mongoimport --db aaz7118_db --collection events --file historical-events.json`")
print("2. `mongoimport --db aaz7118_db --collection meteorites --file meteorites.json`")
print("3. `mongoimport --db aaz7118_db --collection cities --type csv --headerline --file worldcities.csv`")
print("\nedit the above command at `--file <file relative path>` if the file is another directory or has another name.\n")
print("You can then run the script using this command:")
print("`mongo <q3.js`\n")
print("NOTE: I could only get `mongo <q3.js` to work on command prompt. It did not work on bash or PowerShell.\n")
print("This was completed using MongoDB shell version v4.2.23")
print("--------------\n")

// 3. Extra Credit: 50 points
// 1. 15 points: (events.json): Count the number of events per year.
use aaz7118_db
print("3. Extra Credit: 50 points")
print("\n1. 15 points: (events.json): Count the number of events per year.\n")
db.events.aggregate([
    // Check if the date is a full date or just a year
    {
        $addFields: {
            year: {
                $cond: [
                { $gt: [{ $strLenBytes: "$date" }, 4] },
                // If it's a full date, extract the year from the array
                { $toInt: { $arrayElemAt: [{ $split: ["$date", "/"] }, 0] } },
                // If it's just a year, convert the string to an integer
                { $toInt: "$date" }
                ]
            }
            }
    },
    // Group events by year and count them
    {
      $group: {
        _id: "$year",
        count: { $sum: 1 }
      }
    },
    // Sort the result by year in ascending order
    { $sort: { _id: 1 } }
  ])
  
  db.cities.find({
    $or: [
        { city: { $regex: /"/ } },
        { city_ascii: { $regex: /"/ } },
        { admin_name: { $regex: /"/ } },
        { capital: { $regex: /"/ } }
    ]
})
