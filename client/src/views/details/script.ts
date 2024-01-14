const stars = document.getElementsByClassName("form__header--rate") as HTMLCollectionOf<HTMLElement>;
const starIcon=document.createElement("i");
starIcon.classList.add("bi", "bi-star");
//add starIcon to stars
stars[0].appendChild(starIcon);
stars[0].appendChild(starIcon);
stars[0].appendChild(starIcon);
stars[0].appendChild(starIcon);
stars[0].appendChild(starIcon);

// for (let i = 0; i < stars.length; i++) {
// 	const star = stars[i];
// 	star.addEventListener("click", () => {

// 		console.log("clicked");
// 	});
// }
console.log(stars);