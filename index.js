//DOM Manipulation
//Get Elements
const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeName = document.querySelector(".anime-name");

//Add Event Listener
btnEl.addEventListener("click", async () => {
  //API google cat boys api
  //www.catboys.com
  //No api key needed

  try {
    btnEl.disabled = true;
    btnEl.innerText = "loading...";
    //fetch API
    const response = await fetch("https://api.catboys.com/img");
    //convert to json
    const data = await response.json();
    console.log(data);
    animeContainerEl.style.display = "block";
    animeImgEl.src = data.url;
    animeName.innerText = data.artist;
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
  } catch (error) {
    console.log(error);
  }
});
