let page = 1;
function display(start, end,page) {
  fetch(
    `https://www.balldontlie.io/api/v1/games?page=${page}&per_page=4&start_date=${start}&end_date=${end}`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res.data);
      const no = document.createElement("h1");
      if(res.length==0){
           
        no.innerText = "No Games Found"
      }
      res.data.forEach((el) => {
       
        
        const name = document.createElement("h3");
        name.innerText = el.home_team.full_name;

        const date = document.createElement("h3");
        date.innerText = el.date;

        const season = document.createElement("h3");
        season.innerText = el.season;

        const status = document.createElement("h3");
        status.innerText = el.status;

        const home = document.createElement("h3");
        season.innerText = el.home_team_score;

        const division = document.createElement("h3");
        division.innerText = el.home_team.division;
        const homewon = document.createElement("h1");
      

        

        const full_name = document.createElement("h3");
        full_name.innerText = el.visitor_team.full_name;

        const v_date = document.createElement("h3");
        v_date.innerText = el.date;

        const v_season = document.createElement("h3");
        v_season.innerText = el.season;

        const v_status = document.createElement("h3");
        v_status.innerText = el.status;

        const v_home = document.createElement("h3");
        v_home.innerText = el.visitor_team_score;

        const v_division = document.createElement("h3");
        v_division.innerText = el.visitor_team.division;

       const visitorwon= document.createElement("h1")
        if (el.home_team_score > el.visitor_team_score) {
            homewon.innerText = "WON";
          } else if (el.home_team_score < el.visitor_team_score) {
            homewon.innerText = "LOST";
          } else if (el.home_team_score == el.visitor_team_score) {
            homewon.innerText = "TIE";
          }

          if (el.home_team_score > el.visitor_team_score) {
            visitorwon.innerText = "LOST";
          } else if (el.home_team_score < el.visitor_team_score) {
            visitorwon.innerText = "WON";
          } else if (el.home_team_score == el.visitor_team_score) {
            visitorwon.innerText = "TIE";
          }

        document
          .querySelector(".home")
          .append(name, date, season, status, home, division, homewon,no);

        document
          .querySelector(".visitor")
          .append(full_name, v_date, v_season, v_status, v_home, v_division,visitorwon);
      });
    })
    .catch((err) => console.log(err));
}

const btn = document.createElement("button");
btn.innerText = "add";
btn.addEventListener("click", myFun);

document.querySelector(".gamesContainer").append(btn);

function myFun() {
  const s = document.querySelector("#start").value;

  const e = document.querySelector("#end").value;
  display(s, e,page);
}


document.querySelector(".currentpage").innerText = page
document.querySelector(".prev",myFun)

function myFun(){
    if(page>1){
        page--;
        display(page)
        document.querySelector(".currentpage").innerText = page
    }
}

document.querySelector(".next",myNext)

function myNext(){
 
        page++;
    display(page)
    document.querySelector(".currentpage").innerText = page
}
