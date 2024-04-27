const heroeslist = document.querySelector(".heroes__list");
console.log(heroeslist);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function fetchHeroes() {
  return fetch("https://rickandmortyapi.com/api/character").then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
function renderHeroes(heroes) {
  const marcup = heroes
    .map((heroy) => {
      return `
        <li class="item"style="background-color:${getRandomHexColor()};">
            <p class="name" style="color:${getRandomHexColor()};">Name: ${heroy.name}</p>
            <img src="${heroy.image}" alt="image" class="image">
        </li>
        `;
    })
    .join("");
  console.log(marcup);
  heroeslist.innerHTML = marcup;
}
fetchHeroes().then((heroes) => renderHeroes(heroes.results));
