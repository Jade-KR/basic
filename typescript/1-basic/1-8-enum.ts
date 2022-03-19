{
	// Enum 여러가지 관련된 상수 값들을 한곳에 정의할수있게 도와주는 타입

	// JavaScript
	const MAX_NUM = 6;
	const MAX_STUDENT_PER_CLASS = 10;
	const MONDAY = 0;
	const TUESDAY = 1;
	const WEDNESDAY = 2;
	const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
	const dayOfToday = DAYS_ENUM.MONDAY;

	// TypeScript에서 사용안하는게 좋다 (타입이 정확하게 보장되지 않음)

	// union type 을 활용하여 enum 사용을 피하자
	type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";

	// 모바일 프로그래밍 언어에서는 union type을 이해할 수 없기 때문에 enum을 사용
	enum Days {
		Monday = 1,
		TuesDay,
		Wednesday,
		Thursday,
		Friday,
		Saturday,
		Sunday,
	}

	console.log(Days.Wednesday);
	// day는 Days 라는것을 할당받을 수 있는 타입이다.
	let day: Days = Days.Saturday;
	// day를 다시 변수로 바꾸고 다른 것을 할당할 때, Days에 들어있는 어떤 것이든 할당가능하다
	day = Days.TuesDay;
	// 그런데 enum의 문제는 enum으로 타입이 지정된 변수에 다른 어떤 숫자도 할당할수 있는 것이 문제
	// Days 안에 값들은 최대 6까지 인데 아래와 같이 10을 할당해도 문제가 없음
	day = 10;

	// 그래서 union 타입을 활용해서 enum 사용을 피하자
	let dayOfWeek: DaysOfWeek = "Monday";
	dayOfWeek = "Tuesday";
}
