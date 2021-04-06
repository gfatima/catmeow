const url = 'https://api.thecatapi.com/v1/images/search';
api_key = "d8927754-2985-4779-a3f5-f454e27cdd70";
let generate_btn = document.querySelector(".generate_btn");

generate_btn.addEventListener("click", catsImg);

function catsImg() {
  let catsImgDiv = document.querySelector(".catsImgDiv")
  catsImgDiv.innerHTML = ''

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let catsImgUrl = data[0].url;
      let catsImgEl = document.createElement("img")
      catsImgEl.setAttribute('src', `${catsImgUrl}`)
      catsImgEl.classList.add("showcase")

      let catsImgDiv = document.querySelector(".catsImgDiv")
      catsImgDiv.appendChild(catsImgEl)
    })
    .catch(err => console.log(err))
}