const glob = require("glob");
const fs = require("fs");
const chalk = require("chalk");

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