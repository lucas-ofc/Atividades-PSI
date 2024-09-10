
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

function removeColors_blue() {
    var blueElements = document.getElementsByClassName("blue");

    for (var i = 0; i < blueElements.length; i++) {
        blueElements[i].style.background = "";
    }
}

function removeColors_green() {
    var greenElements = document.getElementsByClassName("green");

    for (var i = 0; i < greenElements.length; i++) {
        greenElements[i].style.background = "";
    }
}

var blueElements = document.getElementsByClassName("a")
for (var i = 0; i < blueElements.length; i++) {
    blueElements[i].addEventListener('click', function() {
        removeColors_blue();
    });
}

var greenElements = document.getElementsByClassName("b")
for (var i = 0; i < greenElements.length; i++) {
    greenElements[i].addEventListener('click', function() {
        removeColors_green();
    });
}
