const fs = require('fs');
const fsPromises = require('fs').promises;

fs.promises.readFile("./GFG_Test.txt")
    .then(function (result) {
        console.log("" + result);
    })
    .catch(function (error) {
        console.log(error);
    })
