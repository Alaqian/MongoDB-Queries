{/*

INTSTRUCTIONS:
--------------

To run this script, make sure you run this on command prompt to import the data:
1. `mongoimport --db aaz7118_db --collection events --file historical-events.json`

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

  