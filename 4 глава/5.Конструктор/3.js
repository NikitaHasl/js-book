function Accumulator(startValue) {
	this.value = startValue;
	this.read = function () {
		this.value += +prompt('Введите новое число', 0);
	};
}
