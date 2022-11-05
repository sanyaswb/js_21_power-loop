const power = require('./index');
const solution = require('./system/solution');
const { getRandomInt, findString } = require('./system/environment');

test('Функция должна вернуть число', () => {
	const type = typeof power(5, 2);

	expect(type).toBe('number');
});

test('Не использовать Math.pow', async () => {
	const mathPowMatch = await findString('Math.pow');

	expect(mathPowMatch).not.toBe(true);
});

test('Не использовать "**"', async () => {
	const powOperatorMatch = await findString('**');

	expect(powOperatorMatch).not.toBe(true);
});

test('Тест. number: 5, pow: 2', () => {
	const res = power(5, 2);

	expect(res).toBe(25);
});

test('Тест. number: 4, pow: 8', () => {
	const res = power(4, 8);

	expect(res).toBe(65536);
});

test('Тест. number: 3, pow: 5', () => {
	const res = power(3, 5);

	expect(res).toBe(243);
});

test('Тест. number: 56, pow: 3', () => {
	const res = power(56, 3);

	expect(res).toBe(175616);
});

test('Тест. number: 25, pow: 1', () => {
	const res = power(25, 1);

	expect(res).toBe(25);
});

test('Тест. number: 1092, pow: 0', () => {
	const res = power(1092, 0);

	expect(res).toBe(1);
});

test('Тест. number: 2, pow: 14', () => {
	const res = power(2, 12);

	expect(res).toBe(4096);
});

test('Auto: random outcomes', () => {
	let failed = false;

	for (let i = 0; i < 100; i++) {
		const randNumber = getRandomInt(1, 40);
		const randPow = getRandomInt(1, 6);

		if (solution(randNumber, randPow) !== power(randNumber, randPow)) {
			failed = 'failed';
			break;
		}
	}

	expect(failed).not.toBe('failed');
});