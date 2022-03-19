const menus = document.querySelector(".header__menus__wrapper");
const modal = document.querySelector(".modal__outer");
menus?.addEventListener("click", (e) => {
	console.log(e);
	if (e?.target?.id === "header__image__btn") {
		console.log("image");
	}
});
