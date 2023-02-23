const display = (page) => {
  fetch(`https://www.balldontlie.io/api/v1/players?page=${page}&per_page=${10}`)
    .then((res) => res.json())
    .then((res) =>
      res.data.forEach((el) => {
      
        console.log(el);
        const bigdiv = document.createElement("div");

        const img = document.createElement("img");
        img.src =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2JDFxRwGHf9gwzarZg9w8mTj9dXnx3m7vbncgfsCH-A&s";
        img.alt = "image";

        const fullName = document.createElement("h3");
        fullName.innerText = `fullName:- ${el.first_name} ${el.last_name}`;

        const position = document.createElement("p");
        position.innerText = `position:- ${el.position}`;

        const button = document.createElement("button");
        button.innerText = "Team Details";
        button.addEventListener("click", () => {
          const teamDiv = document.createElement("div");

          const teamName = document.createElement("h2");
          teamName.innerText = `Team Name :- ${el.team.full_name}`;
          const conference = document.createElement("h2");
          conference.innerText = `conference :- ${el.team.conference}`;
          const division = document.createElement("h2");
          division.innerText = `division :- ${el.team.division}`;
          const city = document.createElement("h2");
          city.innerText = `city :- ${el.team.city}`;

          teamDiv.append(teamName, conference, division, city);

          document.querySelector(".card-container").append(teamDiv);
        });

        bigdiv.append(img, fullName, position, button);

        document.querySelector(".card-container").append(bigdiv);
      })
    )
    .catch((err) => console.log(err));
};
display();

document.querySelector(".searchBtn").addEventListener("click", myfunction);

function myfunction() {
  const search = document.querySelector("#search").value;

  fetch(`https://www.balldontlie.io/api/v1/players?search=${search}`)
    .then((res) => res.json())
    .then((res) =>
      res.data.forEach((el) => {
        document.querySelector(".card-container").innerHTML = "";
        console.log(el);
        const bigdiv = document.createElement("div");

        const img = document.createElement("img");
        img.src =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2JDFxRwGHf9gwzarZg9w8mTj9dXnx3m7vbncgfsCH-A&s";
        img.alt = "image";

        const fullName = document.createElement("h3");
        fullName.innerText = `fullName:- ${el.first_name} ${el.last_name}`;

        const position = document.createElement("p");
        position.innerText = `position:- ${el.position}`;

        const button = document.createElement("button");
        button.innerText = "Team Details";
        button.addEventListener("click", () => {
          const teamDiv = document.createElement("div");

          const teamName = document.createElement("h2");
          teamName.innerText = `Team Name :- ${el.team.full_name}`;
          const conference = document.createElement("h2");
          conference.innerText = `conference :- ${el.team.conference}`;
          const division = document.createElement("h2");
          division.innerText = `division :- ${el.team.division}`;
          const city = document.createElement("h2");
          city.innerText = `city :- ${el.team.city}`;

          teamDiv.append(teamName, conference, division, city);

          document.querySelector(".card-container").append(teamDiv);
        });

        bigdiv.append(img, fullName, position, button);

        document.querySelector(".card-container").append(bigdiv);
      })
    )
    .catch((err) => console.log(err));
}

//pagination
let page=1
document.querySelector(".displayPage").innerText = 1
const prev = document.querySelector(".prev").addEventListener("click", myPrev);

function myPrev() {
  document.querySelector(".card-container").innerHTML=""
  if (page > 1) {
    page--;
    display(page);
    document.querySelector(".displayPage").innerText = page
  }
}

const next = document.querySelector(".next").addEventListener("click", myNext);
function myNext() {
  document.querySelector(".card-container").innerHTML=""
  page++;

  display(page);
  document.querySelector(".displayPage").innerText = page
}




