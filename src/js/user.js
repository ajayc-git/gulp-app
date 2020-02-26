$(document).ready(() => {
    $("a").click((e) => {
        alert("User clicked on a link!")
        e.preventDefault();
    })
});