const glob = require("glob");
const fs = require("fs");
const chalk = require("chalk");
const crypto = require("crypto");

glob("images/*", (error, files) => {
  let fileName = "index.html";
  let amount = 0;

  files.forEach((file, index) => {
    let text = `<img class="slider" src="${file}" style="width:75%">`;
    fs.appendFile(fileName, text, (error) => {
      if (error){
        console.log(error);
      }
    })
    amount = index + 1;
  });
  console.log(chalk.green(`> [✔] Successfully added ${amount} images to index.html`));
});

// glob("images/*", (error, files) => {
//   files.forEach((file, index) => {
//     const id = crypto.randomBytes(16).toString("hex");
//     fs.rename(file, id + '.' + file.split('.')[1], () => {
//       console.log("\nFile Renamed!\n");
//     });
//     console.log(id); 
//     console.log(file.split('.')[0], file.split('.')[1], index);
//   });
// });