function kebabToSnake(str) {
    //var kebab = "-";
    //var snake = "_";
    //var res = string.replace(kebab,snake);
    var res = str.replace(/-/g, "_")
    //console.log(res);
    return res;
}

kebabToSnake("hello-world");
kebabToSnake("dogs-are-awesome");
kebabToSnake("blah");