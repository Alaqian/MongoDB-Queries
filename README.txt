INTSTRUCTIONS:
--------------

To run this script, make sure you run this on command prompt to import the data:
`mongoimport --db aaz7118_db --collection restaurants --file restaurants.json`

edit the above command at `--file <file relative path> if the file is another directory or has another name.

You can then run the script using this command:
mongo < q2_verbose.js

There are four versions of the script:
- q2_pretty_quiet.js: uses .pretty() to reformat output - without printed comments,
- q2_pretty_verbose.js: uses .pretty() to reformat output - with printed comments,
- q2_quiet.js: does not use .pretty() to reformat output - without printed comments,
- q2_verbose.js: does not use .pretty() to reformat output - with printed comments
