// Write an isValidPassword function

// that accepts 2 arguments: password and username

// password must:
// - be at least 8 characters long
// - cannot contain spaces
// - cannot contain the username
// - if all requirements are met, return true.
// otherwise: false

// isValidPassword('89Fjj1nms', 'cdmHonk'); true
// isValidPassword('cdmHonk', 'cdmHonk'); false
//isValidPassword('hello1', 'cdmHonk'); false

const isValidPassword = (password, username) => {
	if (password.length < 8) {
		// problem with password.length >= 8, is that if it's true, then the if statement won't continue
		return false;
	}
	if (password.indexOf(' ') !== -1) {
		// if password doesn't contain spaces
		return false;
	}
	if (password.indexOf(username) !== -1) {
		// if password doesn't contain the username
		return false;
	} else
		// then, as all the requirement are fulfilled, then return true
		return true;
};
