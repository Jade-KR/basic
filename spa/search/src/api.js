const API_END_POINT =
	"https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = async (url) => {
	const res = await fetch(url);
	try {
		if (res.ok) {
			const json = await res.json();
			return json;
		}

		throw new Error("API 통신 실패");
	} catch (e) {
		alert(`${e.name}, 에러메세지: ${e.message}`);
	}
};

export const fetchLanguages = async (keyword) =>
	request(`${API_END_POINT}/languages?keyword=${keyword}`);
