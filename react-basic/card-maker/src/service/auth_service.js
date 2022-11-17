import {
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";

class AuthService {
	login(providerName) {
		const provider = this.getProvider(providerName);
		signInWithPopup(auth, provider);
	}

	getProvider(name) {
		switch (name) {
			case "Google":
				return new GoogleAuthProvider();
			case "Github":
				return new GithubAuthProvider();
			default:
				break;
		}
	}
}

export default AuthService;
