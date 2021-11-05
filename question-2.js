// Question 2
// Make a call to the Rawg API.

// Go to https://rawg.io/apidocs and get an API key which you’ll use as
//part of the endpoint you’re making an API call to.
// You can use https://noroff.no for the URL and Noroff Assignment for the description.

// You'll be given an API Key you can add as a "key" parameter in your fetch request.

// Make a call to the following API endpoint replacing
//INSERTAPIKEYHERE with the key given to you from the Rawg API.
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE

// Loop through the results and display the following properties in HTML,
// but only for the first eight results:
// name
// rating
// number of tags (not the tag details, just the amount of tags)
// The styling for this assignment is not important but loading indicator
//should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

// You can use either regular promise or async/await syntax to make the call.

// Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.

//test same code but gives an message why???

//My answer for question 2 goes here:

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ae82ccf56d32492c93c5fb7b5211493e";

const resultsContainer = document.querySelector(".results");

async function getGamesInfo() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    console.log(results);

    const gameInfo = results.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < gameInfo.length; i++) {
      if (i === 8) {
        break;
      }

      let name = gameInfo[i].name;
      let rating = gameInfo[i].rating;
      let numberOfTags = gameInfo[i].tags.length;

      resultsContainer.innerHTML += `<div class="result">
                                        <p>Name:${name}</p>
                                        <p>Rating:${rating}</p>
                                        <p>Number of tags: ${numberOfTags}</p>
                                      </div>`;
    }
  } catch (error) {
    resultsContainer.innerHTML += errorMessage(
      "Unable to get the description based on API call."
    );
  }
}

getGamesInfo();
