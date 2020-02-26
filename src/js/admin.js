$(document).ready(function(){
    $("a").click(function(e) {
        alert("Admin clicked on a link!")
        e.preventDefault();
    })
});