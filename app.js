 // Adding click event listener to all buttons
 $("button").on("click", function() {
    //Grabbing and storing the data-animal property value from the button
      var animal = $(this).attr("data-animal");
    //Constructing a queryURL using the animal name  
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

        //Performing Ajax request with queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.
        console.log(response);
        console.log(queryURL);
        // Step 2: since the image information is inside of the data key,
        // make a variable named results and set it equal to response.data
        // =============== put step 2 in between these dashes ==================
        var results = response.data;
        // ========================
        for (var i = 0; i < results.length; i++) {
        // Step 3: uncomment the for loop above and the closing curly bracket below.
        // Make a div with jQuery and store it in a variable named animalDiv.
        var animalDiv = $("<div>");
        // Make a paragraph tag with jQuery and store it in a variable named p.
        // Set the inner text of the paragraph to the rating of the image in results[i].
        var p = $("<p>").text("Rating: " + results[i].rating);
        // Make an image tag with jQuery and store it in a variable named animalImage.
        var animalImage = $("<img>");
        // Set the image's src to results[i]'s fixed_height.url.
        animalImage.attr("src", results[i].images.fixed_height.url);
        // Append the p variable to the animalDiv variable.
        animalDiv.append(p);
        // Append the animalImage variable to the animalDiv variable.
        animalDiv.append(animalImage);
        // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
        // ============= put step 3 in between these dashes ======================
        $("#gifs-appear-here").prepend(animalDiv);
        // ==================================
        }
      });
    });