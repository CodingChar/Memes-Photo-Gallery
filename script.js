const container = document.querySelector(".carousel-inner");

const renderMeme = function (data) {
  const html = `
  <div class="carousel-item">
  <img src="${data.url}" class="d-block w-100" alt="...">
  </div>`;
  container.insertAdjacentHTML("beforeend", html);
};

const getmeme = function () {
  fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.data.memes);
      data.data.memes.forEach((item) => {
        renderMeme(item);
      });
      console.log(container.firstElementChild.classList.toggle("active"));
    });
};

getmeme();
