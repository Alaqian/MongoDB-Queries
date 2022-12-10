
INTSTRUCTIONS:
--------------

To run the question 2 script, make sure you run this on command prompt to import the data:
`mongoimport --db aaz7118_db --collection restaurants --file restaurants.json`

edit the above command at `--file <file relative path>` if the file is another directory or has another name.

You can then run the script using this command:
`mongo < q2_verbose.js`

There are four versions of the script, you can run any one you like:
- q2_pretty_quiet.js: uses .pretty() to reformat output - without printed comments,
- q2_pretty_verbose.js: uses .pretty() to reformat output - with printed comments,
- q2_quiet.js: does not use .pretty() to reformat output - without printed comments,
- q2_verbose.js: does not use .pretty() to reformat output - with printed comments

The output of running q2_pretty_verbose.js has been copied into q2.pdf with indexing for each query.

NOTE: I could only get `mongo <q2_pretty.js` to work on command prompt. It did not work on bash or PowerShell. Same with other .js files.

This was completed using MongoDB shell version v4.2.23
--------------

For question 3, you need to do use the following on command prompt:
1. `mongoimport --db aaz7118_db --collection events --file historical-events.json`
2. `mongoimport --db aaz7118_db --collection meteorites --file meteorites.json`
3. `mongoimport --db aaz7118_db --collection cities --type csv --headerline --file worldcities.csv`

You can then run the script using this command:
`mongo <q3.js`

edit the above command at `--file <file relative path>` if the file is another directory or has another name.

NOTE: I could only get `mongo <q3.js` to work on command prompt. It did not work on bash or PowerShell.

This was completed using MongoDB shell version v4.2.23
--------------