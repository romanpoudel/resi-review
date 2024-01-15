// import api from "../api/config.ts";

const searchInput = document.getElementById("Search") as HTMLInputElement;

const handleSearch = async (e: Event) => {
	e.preventDefault();
	const searchValue = searchInput.value;
	if (searchValue.trim() !== "") {
		try {
			// await api.get(`/house/all-house-reviews?location=${searchValue}`);
			console.log(searchValue);
		} catch (err) {
			console.log(err);
		}
	}
};

searchInput.addEventListener("change", handleSearch);
