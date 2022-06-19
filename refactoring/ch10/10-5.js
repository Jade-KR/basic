class Hotel {
	#rooms;
	constructor() {
		this.#rooms = [];
	}

	addRoom(roomNumber) {
		this.#rooms[roomNumber] = new Room(roomNumber);
	}

	emptyRoom(roomNumber) {
		this.#rooms[roomNumber] = new EmptyRoom(roomNumber);
	}

	cleanRooms() {
		this.#rooms.forEach((room) => room.clean());
	}
}

class Room {
	constructor(roomNumber) {
		this.roomNumber = roomNumber;
	}
	clean() {
		console.log(`${this.roomNumber} 깨끗하게 청소합니다!`);
	}
}
class EmptyRoom extends Room {
	clean() {
		console.log(`${this.roomNumber}번 방이 비어있어요~`);
	}
}

const hotel = new Hotel();
hotel.addRoom(0);
hotel.addRoom(1);
hotel.emptyRoom(1);
hotel.cleanRooms();
