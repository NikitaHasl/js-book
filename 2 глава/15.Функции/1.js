function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		// ...
		return confirm('Родители разрешили?');
	}
}

function checkAge(age) {
	if (age > 18) {
		return true;
	}
	// ...
	return confirm('Родители разрешили?');
}
// else не нужен, т.к. после первого return функция преркратит работу
