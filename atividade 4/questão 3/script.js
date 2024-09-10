function zoonIn() {
    var img = document.getElementsByClassName("image");
    
    for (i = 0; i < img.length; i++){
        var imgWidth = img[i].clientWidth
        var imgHeight = img[i].clientHeight
        
        img[i].style.width = (imgWidth + 30) + "px";
        img[i].style.height = (imgHeight + 30) + "px";
    }
}

function zoonOut() {
    var img = document.getElementsByClassName("image");

    for (i = 0; i < img.length; i++){
        var imgWidth = img[i].clientWidth
        var imgHeight = img[i].clientHeight
        
        img[i].style.width = (imgWidth - 30) + "px";
        img[i].style.height = (imgHeight - 30) + "px";
    }
}