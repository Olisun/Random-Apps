const fs = require("fs");
const data = require("./theData.json");

const initialData = [
  {
    name: "Oliver Sun",
    age: 48,
    type: "Person",
    FavFoods: ["KFC", "White Knua Knu"],
    address: {
      street: "260 Clara",
      city: "San Francisco"
    }
  },
  {
    name: "Taylor Sun",
    age: 9,
    type: "Wiggly",
    FavFoods: ["Tweets", "Buddy Tweets"],
    address: {
      street: "260 Clara",
      city: "San Francisco"
    }
  }
]

const jsonString = JSON.stringify(initialData, null, 2);
fs.writeFile("./theData.json", jsonString, error => {
  if (error) {
    console.log("error")
  } else {
    console.log("successful")
  }
});

// Below is a helper function to read the json file.
function jsonReader(filePath, callback) {
  fs.readFile(filePath, (error, fileData) => {
    if (error) {
      return callback && callback(error)
    }
    try {
      const object = JSON.parse(fileData)
      return callback && callback(object)
    } catch (error) {
      return callback && callback(error)
    }
  })
};

jsonReader("./theData.json", (error, initialData) => {
  if (error) {
    console.log(error)
    return
  }
})

const moreData = [
  {
    name: "Oliver Sun",
    age: 48,
    type: "Person",
    FavFoods: ["KFC", "White Knua Knu"],
    address: {
      street: "260 Clara",
      city: "San Francisco"
    }
  },
  {
    name: "Taylor Sun",
    age: 9,
    type: "Wiggly",
    FavFoods: ["Tweets", "Buddy Tweets"],
    address: {
      street: "260 Clara",
      city: "San Francisco"
    }
  }
]
fs.writeFile("./theData.json", JSON.stringify(moreData), (error) => {
  if (error) {
    console.log("error writing file:", error)
  }
})