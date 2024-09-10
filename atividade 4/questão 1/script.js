function changeColors_blue() {
    var elements = document.getElementsByClassName("blue");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.background = "blue";
    }
}

function changeColors_green() {
    var elements = document.getElementsByClassName("green");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.background = "green";
    }
}

function changeColors_green() {
    var elements = document.getElementsByClassName("green");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.background = "green";
    }
}

function removeColors() {
    var blueElements = document.getElementsByClassName("blue");
    var greenElements = document.getElementsByClassName("green");

    for (var i = 0; i < blueElements.length; i++) {
        blueElements[i].style.background = "";
    }

    for (var i = 0; i < greenElements.length; i++) {
        greenElements[i].style.background = "";
    }
}

document.querySelectorAll('td').forEach(td => {
    td.addEventListener('click', function() {
        removeColors();
    });
});