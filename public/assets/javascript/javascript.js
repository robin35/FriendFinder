//========================================================================================================
// Get the form data
//========================================================================================================

$("#submitBtn").on("click", function(event) {
    event.preventDefault();
    
    var isValidForm = true;
    var isValidAnswer = true;
    var isValid = true;

    var userData = {};

        // Check for completeness

        if($("#name").val() === "" || $("#photo").val() === "") {
            isValidForm = false;
            console.log("isValidForm", isValidForm);
        }

        if ($("#Q1").val() === null || $("#Q2").val() === null || $("#Q3").val() === null || $("#Q4").val() === null || $("#Q5").val() === null || $("#Q6").val() === null || $("#Q7").val() === null || $("#Q8").val() === null || $("#Q9").val() === null || $("#Q10").val() === null) {
            isValidAnswer = false;
            console.log("isValidAnswer", isValidAnswer);
		}

        if(isValidForm === false || isValidAnswer === false ) {
            isValid = false;
            console.log("isValidAnswer", isValidAnswer);
        }

        console.log("isValid", isValid);

    if(isValid) {
        userData = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [
                $("#Q1").val(),
                $("#Q2").val(),
                $("#Q3").val(),
                $("#Q4").val(),
                $("#Q5").val(),
                $("#Q6").val(),
                $("#Q7").val(),
                $("#Q8").val(),
                $("#Q9").val(),
                $("#Q10").val()
            ]
        };

        console.log("userData", userData);

        var currentURL = window.location.origin;
        console.log("currentURL: ", currentURL);
        
        $.post(currentURL + "/api/friends", userData, function(data) {
                     
            $("#bestFriend").text(data.friendName);
            $("#bestFriendPhoto").attr("src", data.friendPhoto);
            $("#bestFriendModal").modal("toggle");
           
            console.log("returnedData: ", data);
        });
    } else {
        // If form has not been completely filled-out, show alert
        alert("Survey is incomplete! Please review your answers.");
    }
});
