function Calculator() {
	this.read = function () {
		this.num1 = +prompt('Введите 1 число');
		this.num2 = +prompt('Введите 2 число');
	};
	this.sum = function () {
		return this.num1 + this.num2;
	};
	this.mul = function () {
		return this.num1 * this.num2;
	};
}
