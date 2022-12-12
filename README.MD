
INTSTRUCTIONS:
--------------

## Question 2

To run the question 2 scripts, make sure you run this on command prompt to import the data:
```
> mongoimport --db aaz7118_db --collection restaurants --file restaurants.json
```

edit the above command at `--file <file relative path>` if the file is another directory or has another name.

You can then run any of the scripts using this command:
```
mongo < aaz7118q2_verbose.js
```

There are four versions of the script, you can run any one you like:
- aaz7118q2_pretty_quiet.js: uses .pretty() to reformat output - without printed comments,
- aaz7118q2_pretty_verbose.js: uses .pretty() to reformat output - with printed comments,
- aaz7118q2_quiet.js: does not use .pretty() to reformat output - without printed comments,
- aaz7118q2_verbose.js: does not use .pretty() to reformat output - with printed comments

The output of running aaz7118q2_verbose.js has been copied into "aaz7118_Assignment_4.pdf" with indexing for each query.

NOTE: I could only get `mongo <aaz7118q2_pretty.js` to work on command prompt. It did not work on bash or PowerShell. Same with other .js files.

## Question 3

For question 3, you need to do use the following on command prompt:
```
mongoimport --db aaz7118_db --collection events --file historical-events.json
mongoimport --db aaz7118_db --collection meteor --file meteorites.json
mongoimport --db aaz7118_db --collection City --type csv --headerline --file worldcities.csv
```
edit the above commands at `--file <file relative path>` if the file is another directory or has another name.

You can then run the script using this command:
```
mongo <aaz7118q3.js
```

NOTE: I could only get `mongo <aaz7118q3.js` to work on command prompt. It did not work on bash or PowerShell.

The output of running this script has been copied into "aaz7118_Assignment_4.pdf" with indexing for each query.

##### This was completed using MongoDB version v4.2.23
