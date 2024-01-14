const value = document.getElementById("estimate-value") as HTMLSpanElement;
const slider = document.getElementById("estimate") as HTMLInputElement;

slider.addEventListener("input", function () {
	value.textContent = "$" + this.value +"*";
});
