function getCookie(cookieName: string) {
	const name = cookieName + "=";
	const decodedCookie = decodeURIComponent(document.cookie);
	console.log(document.cookie, "decode");
	const cookieArray = decodedCookie.split(";");

	for (let i = 0; i < cookieArray.length; i++) {
		const cookie = cookieArray[i].trim();
		if (cookie.indexOf(name) === 0) {
			return cookie.substring(name.length, cookie.length);
		}
	}

	return null;
}

export default getCookie;
