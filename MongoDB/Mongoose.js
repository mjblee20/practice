// mongoose is a ODM (Object Document Mapper) makes using MongoDB much easier
const mongoose = require('mongoose');

// Connects to the MongoDB Server locally for now, and creates an exampleDB db if doesn't exist
mongoose.connect('mongodb://localhost:27017/exampleDB', { useNewUrlParser: true, useUnifiedTopology: true });

// This is a blueprint or structure of the collection you wish to add to the database
const exampleSchema = new mongoose.Schema({
  name: {
    type: String,
    // required field with two bits, a boolean and a message if a name was not specified
    required: [true, 'Why no name?']
  },
  // Adding Validation. originally ->      rating: Number,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
  
});

// Creates an Example collection in the database
// One thing to note is that the collection name in the command line MongoDB will drop the capitalization and pluralize the name. (Meaning Example -> examples)
const Example = mongoose.model("Example", exampleSchema);

const example1 = new Example ({
  name: "Bill",
  rating: 7,
  review: "A nice guy"
})
const example2 = new Example ({
  name: "Ruby",
  rating: 10,
  review: "A nice girl"
})
const example3 = new Example ({
  name: "Bean",
  rating: 4,
  review: "Who?"
})
const example4 = new Example ({
  name: "Gurt",
  rating: 1,
  review: "Ew"
})

// ===CREATE=== new entries
// This line will same individual entries to the database.
// Don't want to keep it because it will enter duplicate entries
// example1.save()

// This allows insertion of more than one entries at once
// Example.insertMany([example2, example3, example4], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully added 3 more examples to the example collections");
//   }
// })

// My Practice
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  // Embedding relationships in MongoDB
  favExample: exampleSchema
});

const Person = mongoose.model("Person", personSchema);
const person1 = new Person ({
  name: "John",
  age: 37
})
const person2 = new Person ({
  name: 'Amy',
  age: 25,
  favExample: example4
})

person2.save();

// ===READ=== Data from Database
Example.find(function(err, examples) {
  if (err) {
    console.log(err);
  } else {
    // Print out everything in the Example collection
    // console.log(examples);

    // Only print out the names of each entry
    examples.forEach(element => {
      console.log(element.name);
    });
  }
})

// ===UPDATE=== 
// Example.updateOne({
//   // first key value pair is the identifying piece
//   "_id" : "5f074c39a8c0229541c495f7", 
//   // second key value pair is the information that is being updated
//   "name" : "Bill"
// }, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the entry");
//   }
// })

// ===DELETE===
// Example.deleteOne({'name': 'Bill'}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the entry with name of Bill");
//   }
// })


// Turns off the connection to DB when you're done! Good habit!!!
// mongoose.connection.close();