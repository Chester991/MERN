const fs = require('fs');
// fs is a built in module 
// we can use this fs module to interact with files
fs.writeFileSync('MERN/NodeJs/new.txt',"Hey Billi");
// this creates a new file new.txt and inserts text 
// :- "Hey Billi" inside the file


// if we want to read a file :-
fs.readFileSync('MERN/NodeJs/contacts.txt'"utf-8");
// utf-8 = standard encoding 
