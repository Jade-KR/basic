"use strict";
var menus = document.querySelector(".header__menus__wrapper");
var modal = document.querySelector(".modal__outer");
menus === null || menus === void 0 ? void 0 : menus.addEventListener("click", function (e) {
    var _a;
    console.log(e);
    if (((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.id) === "header__image__btn") {
        console.log("image");
    }
});
//# sourceMappingURL=main.js.map