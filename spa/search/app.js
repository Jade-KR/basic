import Combine from "./combine.js";
export default function App({ $target }) {
	const ja = [
		"ㄱ",
		"ㄴ",
		"ㄷ",
		"ㄹ",
		"ㅁ",
		"ㅂ",
		"ㅅ",
		"ㅇ",
		"ㅈ",
		"ㅊ",
		"ㅋ",
		"ㅌ",
		"ㅍ",
		"ㅎ",
	];
	const mo = [
		"ㅏ",
		"ㅑ",
		"ㅓ",
		"ㅕ",
		"ㅗ",
		"ㅛ",
		"ㅜ",
		"ㅠ",
		"ㅡ",
		"ㅣ",
		"ㅐ",
		"ㅒ",
		"ㅔ",
		"ㅖ",
		"ㅘ",
		"ㅙ",
		"ㅝ",
		"ㅞ",
		"ㅚ",
		"ㅟ",
		"ㅢ",
	];

	const words = [];

	for (let i = 0; i < ja.length; i++) {
		for (let j = 0; j < mo.length; j++) {
			for (let k = 0; k < ja.length; k++) {
				words.push([ja[i], mo[j], ja[k]]);
			}
		}
	}

	console.log(words.length);

	new Combine({ $target, words });
}
