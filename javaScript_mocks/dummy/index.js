// DOM elements
const cardsContainer = document.querySelector(".cards-container");
const paginationContainer = document.querySelector(".pagination");
const teamModal = document.getElementById("team-modal");
const teamName = document.getElementById("team-name");
const teamAbbreviation = document.getElementById("team-abbreviation");
const teamConference = document.getElementById("team-conference");
const teamDivision = document.getElementById("team-division");
const teamCity = document.getElementById("team-city");
const closeButton = document.getElementsByClassName("close")[0];
const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-input");

// Constants
const playersPerPage = 10;
let currentPage = 1;
let filteredPlayers = [];

// Fetch all players from the API
async function getAllPlayers() {
  const response = await fetch(`https://www.balldontlie.io/api/v1/players`);
  const data = await response.json();
  return data.data;
}

// Fetch team details for a player
async function getTeamDetails(teamId) {
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/teams/${teamId}`
  );
  const data = await response.json();
  return data;
}

// Generate the HTML for a player card
function generateCard(player) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = "https://via.placeholder.com/300x300";
  image.alt = "Player Image";
  card.appendChild(image);

  const name = document.createElement("h3");
  name.textContent = `${player.first_name} ${player.last_name}`;
  card.appendChild(name);

  const position = document.createElement("p");
  position.textContent = `Position: ${player.position}`;
  card.appendChild(position);

  const teamButtonContainer = document.createElement("div");
  teamButtonContainer.classList.add("button-container");
  card.appendChild(teamButtonContainer);

  const teamButton = document.createElement("button");
  teamButton.textContent = "Team Details";
  teamButton.addEventListener("click", async () => {
    const team = await getTeamDetails(player.team.id);
    teamName.textContent = team.full_name;
    teamAbbreviation.textContent = `Abbreviation: ${team.abbreviation}`;
    teamConference.textContent = `Conference: ${team.conference}`;
    teamDivision.textContent = `Division: ${team.division}`;
    teamCity.textContent = `City: ${team.city}`;
    teamModal.style.display = "block";
  });
  teamButtonContainer.appendChild(teamButton);

  return card;
}

// Generate the HTML for the pagination buttons
function generatePaginationButtons(totalPages) {
  const buttons = [];

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    if (i === currentPage) {
      button.classList.add("active");
    }
    button.addEventListener("click", () => {
      currentPage = i;
      displayPlayers();
    });
    buttons.push(button);
  }

  return buttons;
}

// Display the players for the current page

async function displayPlayers() {
  cardsContainer.innerHTML = "";
  const searchInput = document.querySelector("#search-input");
  const name = searchInput.value;
  const players = await getAllPlayers(name);

  const startIndex = (currentPage - 1) * playersPerPage;
  const endIndex = startIndex + playersPerPage;
  const currentPlayers = players.slice(startIndex, endIndex);

  currentPlayers.forEach((player) => {
    const card = generateCard(player);
    cardsContainer.appendChild(card);
  });

  const totalPages = Math.ceil(players.length / playersPerPage);
  const paginationButtons = generatePaginationButtons(totalPages);

  paginationContainer.innerHTML = "";
  paginationButtons.forEach((button) =>
    paginationContainer.appendChild(button)
  );
}
displayPlayers();
closeButton.addEventListener("click", () => {
  teamModal.style.display = "none";
});
