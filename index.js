const inquirer = require("inquirer");
const fs = require("fs");


inquirer.prompt([
    {
        type: "input",
        name: "userName",
        message: "What is your name?"
    }, {
        type: "input",
        name: "location",
        message: "Where are you located?"
    }, {
        type: "input",
        name: "bio",
        message: "Please write a brief bio"
    }, {
        type: "input",
        name: "title",
        message: "What is your preferred working title?"
    }, {
        type: "input",
        name: "linkedIn",
        message: "What is your LinkedIn URL?"
    }, {
        type: "input",
        name: "gitHub",
        message: "What is your GitHub URL?"
    }
])
    .then((answers) => {
        console.log(answers);
        fs.writeFile(`./${answers.userName}.html`,`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Portfolio</title>
            <style>
            body {
                background-color: salmon;
                text-align: center;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            }
            header {
                padding: 20px;
                align-items: center;
                border:black 2px dotted;
                background-color:rgb(94, 246, 252)
            }
        </style>
        </head>
        <body>
            <header> 
                <h1>${answers.userName}</h1>
                <h2>${answers.location}</h2>
            </header>
            <h2>${answers.title}</h2>
           <h2>${answers.bio}</h2>
           <h3> <a href="${answers.linkedIn}">LinkedIn</a></h3>
            <h3> <a href="${answers.gitHub}">GitHub</a></h3>
            
        </body>
        </html>`,(answers, null), (err, data) => {
            if (err) {
                throw err;
            }
            console.log("Data gathered!!")
        })
    })
