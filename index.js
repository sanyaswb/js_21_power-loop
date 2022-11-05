function power(number, pow) {
	let sum = 1;
	for (let i = 0; i < pow; i++) {
		sum *= number;
	}
	return sum;
}

module.exports = power;
