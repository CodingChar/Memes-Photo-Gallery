/*const request = new XMLHttpRequest();

request.open("GET", "https://api.imgflip.com/get_memes");
request.send();

request.addEventListener("load", function () {
  const data = JSON.parse(request.responseText);
  console.log(data);
});*/

const container = document.querySelector(".container");

const renderMeme = function (data) {
  const html = `<img class="memes" src="${data.url}" />`;
  container.insertAdjacentHTML("beforeend", html);
};

const getmeme = function () {
  fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data.memes);
      for (let i = 0; i < data.data.memes.length; i++) {
        renderMeme(data.data.memes[i]);
      }
    });
};

getmeme();
