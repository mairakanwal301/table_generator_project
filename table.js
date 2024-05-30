import inquirer from "inquirer";
import chalk from "chalk";
let myTable = true;
while (myTable) {
    let answers = await inquirer.prompt([{
            name: "tableNum",
            type: "number",
            message: " Enter youe table number: "
        }]);
    let num = answers.tableNum;
    if (num) {
        console.log(chalk.green(`\n Here is a table of ${num} \n`));
        for (let i = 1; i < 11; i++) {
            console.log(`${num} * ${i} = ${num * i}`);
        }
    }
    else {
        console.log(chalk.red("Please enter a numerical input"));
    }
}
;
