document.addEventListener("DOMContentLoaded", () => {
  const advs = document.querySelectorAll(".promo__adv img"),
    genre = document.querySelector(".promo__genre"),
    wrapper = document.querySelector(".promo__bg"),
    seriesList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    input = document.querySelector(".adding__input"),
    checkbox = addForm.querySelector('[type="checkbox"]');

  const seriesDB = {
    series: [
      "Omar",
      "The Final Legacy",
      "Ertugrul",
      "Magnifient Century",
      "The Great Seljuks: Guardians...",
    ],
  };

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let newValue = input.value;
	console.log(newValue)
  });

  advs.forEach((item) => {
    item.remove();
  });

  genre.textContent = "Comedy";

  wrapper.style.backgroundImage = "url(./img/1.jpg)";

  seriesList.innerHTML = "";

  seriesDB.series.forEach((item, index) => {
    seriesList.innerHTML += `
	   <li class="promo__interactive-item">
			  ${index + 1}. ${item}
		  <div class="delete"></div>
	  </li>
	  `;
  });
});
