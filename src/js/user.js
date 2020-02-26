$(document).ready(function(){
    $("a").click(function(e) {
        alert("User clicked on a link!")
        e.preventDefault();
    })
});