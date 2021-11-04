const args = process.argv.slice(2);


const request = require('request');
request(args[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.

  console.log(args[1])
  const fs = require('fs')
  const content = body // save the data you receive and write it to a fs
  
  fs.writeFile(args[1], content, err => {
    if (err) {
      console.error(err)
      return
    }
    // File written succesfully
    fs.stat(args[1], (err, stats) => {
      if (err) {
          console.log(`File doesn't exist.`);
      } else {
          //console.log(stats);
          const size = stats.size;
          console.log(`Downloaded and saved ${size} bytes to ${args[1]}`)

      }
  });
  })
  
});

// const fs = require('fs')

// const content = body // save the data you receive and write it to a fs

// fs.writeFile(args[1], content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   // File written succesfully
//   console.log(`Downloaded and saved ${bytes} bytes to ${args[1]}`)
// })

