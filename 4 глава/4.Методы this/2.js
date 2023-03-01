let calculator = {
	read() {
		this.num1 = +prompt('Введите 1 число');
		this.num2 = +prompt('Введите 2 число');
	},
	sum() {
		return this.num1 + this.num2;
	},
	mul() {
		return this.num1 * this.num2;
	},
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
