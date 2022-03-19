import CartPage from "./CartPage.js";
import ProductDetailPage from "./ProductDetailPage.js";
import ProductListPage from "./ProductListPage.js";

export default function App({ $target }) {
	this.route = () => {
		const { pathname } = location;
		$target.innerHTML = "";
		console.log(pathname);

		if (pathname === "/") {
			// 상품 목록페이지 렌더링
			new ProductListPage({ $target }).render();
		} else if (pathname.indexOf("/products/") === 0) {
			// 상품 상세 페이지 렌더링
			const [, , , productId] = pathname.split("/");
			new ProductDetailPage({
				$target,
				productId,
			}).render();
		} else if (pathname === "/cart") {
			// 장바구니 페이지 렌더링
			new CartPage({
				$target,
			}).render();
		}
	};

	this.route();
}
