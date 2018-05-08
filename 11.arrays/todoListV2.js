var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

setTimeout(function() {
    while(input !== "quit") {
        //handle input
        if(input === "list") {
            listTodos();
            //console.log(todos);
        } else if(input === "new") {
            addTodo();
        } else if(input === "delete") {
            deleteTodo();
        }
        //ask again for new input
        input = prompt("What would you like to do?");
    }
    console.log("OK, YOU QUIT THE APP");
},1000)

function listTodos() {
    console.log("**********");
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("**********");
}

function addTodo() {
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to todos array
    todos.push(newTodo);
    console.log("Added " + newTodo);
}

function deleteTodo() {
    //ask for index of todo to be deleted
    var index = prompt("Enter index of todo to delete");
    //delete that todo
    var del = todos.splice(index,1);
    console.log("Deleted " + del);
}