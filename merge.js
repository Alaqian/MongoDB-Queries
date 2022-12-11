use aaz7118_db


db.getCollection('cities').aggregate( [
    { $merge : { into: { coll: "merge" }, on: "_id",  whenNotMatched: "insert" } }
 ])