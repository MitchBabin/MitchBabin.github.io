$(document).ready(function() { 
    var img = $( "p" ).children( "a" ).children("img");
    for(var i = 0; i <= img.length; i ++){
        var a = img[i].parentNode;
        a.style.display = "inline-Block";
        a.style.textAlign = "center";
    }
});