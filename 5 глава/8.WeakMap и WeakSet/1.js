let messages = [
	{ text: 'Hello', from: 'John' },
	{ text: 'How goes?', from: 'John' },
	{ text: 'See you soon', from: 'Alice' },
];

const readMessage = new WeakSet(); // Лючше хранить в WeakSet. Коллекция будет хранить только уникальные значения (добавление уже прочитанного сообщение снова ни к чему не приведет) и удалять значения, если соответствующий объект станет недоступен.

readMessage.add(messages[0]);
