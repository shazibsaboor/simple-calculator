#! /usr/bin/env node
import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    {
        name: 'num1',
        type: 'number',
        message: 'Enter your first number'
    },
    {
        name: 'num2',
        type: 'number',
        message: 'Enter your second number'
    },
    {
        name: 'operator',
        type: 'list',
        message: 'Select one of the operator which you want to perform function',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
    }
]);
if (answer.operator === 'Addition') {
    console.log('Your answer is:', answer.num1 + answer.num2);
}
else if (answer.operator === 'Subtraction') {
    console.log('Your answer is:', answer.num1 - answer.num2);
}
else if (answer.operator === 'Multiplication') {
    console.log('Your answer is:', answer.num1 * answer.num2);
}
else if (answer.operator === 'Division') {
    console.log('Your answer is:', answer.num1 / answer.num2);
}
else {
    console.log('Please try again');
}
