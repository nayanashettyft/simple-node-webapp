const path = require("path");
const fs = require("fs");

// fs.mkdir(path.join(__dirname,'/test'), {}, err => {
//   if (err) throw err;
//   console.log('Folder created..');
// });

// Create and write to file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World!",
//   (err) => {
//     if (err) throw err;
//     console.log("File created..");
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "I am writing nodeJS",
//       (err) => {
//         if (err) throw err;
//         console.log("File created..");
//       }
//     );
//   }
// );

fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf8' , (err,data) => {
  if (err) throw err;
  console.log(data);
});