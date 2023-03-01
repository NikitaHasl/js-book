let arr = ['a', 'b'];

arr.push(function () {
	alert(this);
});

arr[2](); // выведет содержимое массива, т.к. в момент вызова функции this = arr
