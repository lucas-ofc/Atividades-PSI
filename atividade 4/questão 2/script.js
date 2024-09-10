function createTextFields() {
    var quantity = document.getElementById("quantity").value;

    var container = document.getElementById("textFields");
    container.innerHTML = '';

    for (var i = 0; i < quantity; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Campo de texto " + (i + 1);
        container.appendChild(input);
    }
}