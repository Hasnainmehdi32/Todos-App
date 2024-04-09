import inquirer from "inquirer";
let todosList = [];
let condition = true;

console.log("\n \t wellcome to codewithhasnain - Todo-List Application\n");

while(condition)
    {
        let addTask = await inquirer.prompt([
  {
    name: "task",
    type: "input",
    message: "Enter your new task ?",
  }
]);
todosList.push(addTask.task);
console.log(`${addTask.task} Task added in Todo-List succesfully`);

let addMoreTask = await inquirer.prompt([



  {
    name: "addMore",
    type: "confirm",
    message: "Do you want to add more task ? ",
    default: "False",
  }
]);
condition = addMoreTask.addMore
}
console.log("Your Updated Todo-List" , todosList);