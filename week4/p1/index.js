const {Command  } = require("commander");
const fs = require("fs");

const program = new Command();


program
  .name('counter')
  .description('ClI to do file based tass')
  .version('0.8.0')


program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf-8', (err, data)=> {
      if(err){
        console.log(err);
        
      }else{
        const lines = data.split("\n").length;
        console.log(`There are ${lines} words in ${file}`);
        
      }
    })
  })

  program.parse();


























// another way of getting words


// const fs = require('fs')

// function main(fileName){
//   fs.readFile(fileName, 'utf-8', function(err, data){
//      const words = data.split(' ').length;
//      console.log(`total ${words} in ${fileName}`);
     
//   })
// }


// main(process.argv[2])