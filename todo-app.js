"use strict";

function submitClicked() {
    var newTodo = document.createElement("p");
    var text = document.forms.namedItem("addTodo").innerHTML;
    var textNode = document.createTextNode(text);
    newTodo.appendChild(textNode);

    var element = document.getElementById("todos");
    element.appendChild(newTodo);
}