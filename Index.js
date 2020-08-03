const fs = require('fs');
const inquirer = require ('inquirer');
const generatePage = require('./readme-html');


const createFile = function(code) {
    fs.writeFile('../Readme.MD', code, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
};

const collectData = function () {

    return inquirer.prompt([
    {
        type: 'input',
        name:'title',
        message: 'What is the name of your team Member'
    },
    {
        type: 'input',
        name:'description',
        message: 'What is their role?'
    },

  ])
  .then(answers => {
    console.log(generateHtml(answers));
    return createFile(generateHtml(answers));
  });
};