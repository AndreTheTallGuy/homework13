$(function () {
    $(".devour-burger").on("click", function (event) {
        console.log("clicked");
        var id = $(this).data("id");
        var eaten = $(this).data("devour");
        console.log(eaten);


        var burgerDevoured = {
            devoured: eaten
        };
        console.log(burgerDevoured);

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerDevoured
        }).then(
            function () {
                // console.log("changed sleep to", newState);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $(".BN").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
