class Footer extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
    <footer class="footer">
			<div class="container footer-content">
				<p>&copy; 2024 Resi-Review. All rights reserved.</p>
				<p>Contact us: <a href="mailto:romanpoudel325@gmail.com">contactus@gmail.com</a></p>
			</div>
		</footer>
  `;
	}
}

customElements.define("footer-component", Footer);
