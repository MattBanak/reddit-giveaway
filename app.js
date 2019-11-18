const inquirer = require("inquirer");
const getResults = require("./core/getResults");

const questions = [
    {
        name: 'url',
        type: 'input',
        message: 'Enter the old.reddit.com URL of the Reddit post in question:'
    },
    {
        name: 'isCapitalizationIgnored',
        type: 'list',
        message: 'Should capitalization be ignored?',
        choices: ['Yes', 'No']
    },
    {
        name: 'searchString',
        type: 'input',
        message: 'Enter the string to be checked for:'
    },
    {
        name: 'numberOfWinners',
        type: 'input',
        message: 'How many winners should there be?'
    }
]

return inquirer.prompt(questions).then(async answers => {

    // const results = await getResults(answers.url, answers.isCapitalizationIgnored, answers.searchString, answers.numberOfWinners);

    const results = await getResults('https://old.reddit.com/r/fountainpens/comments/dwzu2j/my_first_fountain_pen_came_from_a_kind_person_on/', 'Yes', 'I would like to enter', "2");

    console.log("Results: " + results);

    process.exit();

});