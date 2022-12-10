
INTSTRUCTIONS:
--------------

To run this script, make sure you run this on command prompt to import the data:
`mongoimport --db aaz7118_db --collection restaurants --file restaurants.json`

edit the above command at `--file <file relative path>` if the file is another directory or has another name.

You can then run the script using this command:
`mongo < q2_verbose.js`

There are four versions of the script:
- q2_pretty_quiet.js: uses .pretty() to reformat output - without printed comments,
- q2_pretty_verbose.js: uses .pretty() to reformat output - with printed comments,
- q2_quiet.js: does not use .pretty() to reformat output - without printed comments,
- q2_verbose.js: does not use .pretty() to reformat output - with printed comments

The output of running this script has been copied into q2_pretty_verbose.pdf with indexing for each query.

NOTE: I could only get `mongo <q2_pretty.js` to work on command prompt. It did not work on bash or PowerShell.

This was completed using MongoDB shell version v4.2.23
--------------