$().ready(function () {
    console.log("loadet succesfully");
    $(".have-sub>a").click(function() {
        // body...
        event.preventDefault();
    })
})