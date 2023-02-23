let currentPage = 1; // Initialize current page to 1

function getGames() {
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const perPage = 5;

  if (!startDate || !endDate) {
    alert("Please select start and end dates");
    return;
  }

  const url = `https://www.balldontlie.io/api/v1/games?start_date=${startDate}&end_date=${endDate}&page=${currentPage}&per_page=${perPage}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data);
      const gamesContainer = document.getElementById("gamesContainer");

      if (data.data.length === 0) {
        gamesContainer.innerHTML = "<p>No Games Found</p>";
        return;
      }

      gamesContainer.innerHTML = "";

      data.data.forEach((game) => {
        const homeTeam = game.home_team;
        const awayTeam = game.visitor_team;

        const homeTeamScore = game.home_team_score;
        const awayTeamScore = game.visitor_team_score;

        let result;
        let result2;
        if (homeTeamScore > awayTeamScore) {
          result = "WON";
        } else if (homeTeamScore < awayTeamScore) {
          result = "LOST";
        } else {
          result = "TIE";
        }

        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        const title = document.createElement("h2");
        title.innerText = `${awayTeam.full_name} ${awayTeamScore} - ${homeTeamScore} ${homeTeam.full_name} (${result})`;
        gameCard.appendChild(title);

        const date = document.createElement("p");
        date.innerText = `Date: ${game.date}`;
        gameCard.appendChild(date);

        const season = document.createElement("p");
        season.innerText = `Season: ${game.season}`;
        gameCard.appendChild(season);

        const period = document.createElement("p");
        period.innerText = `Period: ${game.period}`;
        gameCard.appendChild(period);

        gamesContainer.appendChild(gameCard);
      });

      // Add next and previous buttons
      const paginationContainer = document.getElementById(
        "paginationContainer"
      );
      paginationContainer.innerHTML = "";

      if (currentPage > 1) {
        const previousButton = document.createElement("button");
        previousButton.innerText = "Previous";
        previousButton.addEventListener("click", () => {
          currentPage--;
          getGames();
        });
        paginationContainer.appendChild(previousButton);
      }

      if (data.meta.next_page !== null) {
        const nextButton = document.createElement("button");
        nextButton.innerText = "Next";
        nextButton.addEventListener("click", () => {
          currentPage++;
          getGames();
        });
        paginationContainer.appendChild(nextButton);
      }
    })
    .catch((error) => console.error(error));
}
