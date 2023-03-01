function Calculator() {
	this.methods = {
		'-': (a, b) => a - b,
		'+': (a, b) => a + b,
	};

	this.calculate = function (str) {
		const operands = str.split(' ');

		const a = +operands[0];
		const b = +operands[2];
		const operation = operands[1];

		if (!isFinite(a) || !isFinite(b) || !this.methods[operation]) {
			return NaN;
		}

		return this.methods[operation](a, b);
	};

	this.addMethod = function (operation, func) {
		this.methods[operation] = func;
	};
}
