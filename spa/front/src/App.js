import ProductListPage from "./productListPage.js";
import ProductDetailPage from "./productDetailPage.js";
import CartPage from "./cartPage.js";
import { init } from "./router.js";

export default function App({ $target }) {
	this.route = () => {
		const { pathname } = location;
		$target.innerHTML = "";
		if (pathname === "/web/") {
			new ProductListPage({ $target }).render();
		} else if (pathname.indexOf("/web/products/") === 0) {
			const [, , , productId] = pathname.split("/");
			new ProductDetailPage({
				$target,
				productId,
			}).render();
		} else if (pathname === "/web/cart") {
			new CartPage({ $target }).render();
		}
	};

	init(this.route);

	window.addEventListener("popstate", this.route);

	this.route();
}
