import { request } from "./api.js";
import ProductList from "./productList.js";

export default function ProductListPage({ $target }) {
	const page = document.createElement("div");
	page.className = "ProductListPage";
	page.innerHTML = `
                    <h1>상품목록</h1>
                    `;
	this.render = () => {
		$target.appendChild(page);
	};

	this.setState = (nextState) => {
		this.state = nextState;
	};

	const fetchProducts = async () => {
		const products = await request("products");
		this.setState(products);
		new ProductList({
			$target: page,
			initialState: this.state,
		});
	};

	fetchProducts();
}
