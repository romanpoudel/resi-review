export function showToast(message: string, isSuccess: boolean) {
	const toastContainer = document.createElement("div");
	toastContainer.id = "toastContainer";
	document.body.appendChild(toastContainer);
	const toast = document.createElement("div");
	toast.className = isSuccess ? "toast toast-success" : "toast toast-error";
	toast.textContent = message;

	toastContainer.appendChild(toast);

	setTimeout(() => {
		toast.style.opacity = "1";
	}, 100);

	// Hide and remove toast after 3 seconds
	setTimeout(() => {
		toast.style.opacity = "0";
		setTimeout(() => {
			toast.remove();
		}, 600);
	}, 3000);
}
