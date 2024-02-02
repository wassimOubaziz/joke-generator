async function generate() {
  const respond = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const dataRespond = await respond.json();
  document.querySelector("body main h4").textContent = dataRespond.joke;
}

generate();

/* async function joke() {
  const respond = await fetch("https://api.lorem.space/image/game?w=500&h=700");
  const dataRespond = await respond.blob();
  console.log(dataRespond);
  document.querySelector("body").innerHTML = image;
}

joke(); */

const btn = document.querySelector("body main button");

btn.addEventListener("click", generate);
/* 
const image = document.getElementById("image");
image.src = "https://api.lorem.space/image/game?w=400&h=500"; */
