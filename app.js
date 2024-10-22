let todo = [];


let req = prompt("Enter your request");

while (true) {
    if (req == "quit") {
        console.log("Leaving the app");
        break;
    }
    if (req == "list") {

        if (todo.length === 0) {
            console.log("No tasks to display.");
        } else {
            for (let i = 0; i < todo.length; i++) {
                console.log(i, todo[i]);
            }
        }
    } else if (req == "add") {

        let task = prompt("Please enter the task");
        todo.push(task);
        console.log("Task added");
    } else if (req == "delete") {

        let idx = prompt("Please enter the task index you want to remove");
        idx = parseInt(idx); // Convert the index to an integer
        if (isNaN(idx) || idx < 0 || idx >= todo.length) {
            console.log("Invalid index");
        } else {
            todo.splice(idx, 1);
            console.log("Task removed");
        }
    } else {
        console.log("Unknown command");
    }
    

    req = prompt("Enter your request");
}