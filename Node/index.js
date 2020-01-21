const fs = require("fs");
const data = require("./theData.json");

const initialData = [
  {
    name: "Oliver Sun",
    age: 48,
    type: "Person"
  },
  {
    name: "Taylor Sun",
    age: 9,
    type: "Wiggly"
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
  console.log(initialData)
})