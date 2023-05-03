4. Here's an example of creating a counter with getter and setter accessors

var counter = {
	count: 0,
	get value() {
		return this.count;
	},
	set value(newValue) {
		if (newValue >= 0) {
			this.count = newValue;
		}
	}
};

console.log(counter.value); // outputs 0
counter.value = 3;
console.log(counter.value); // outputs 3
counter.value = -2; // doesn't change the count value because -2 is less than 0
console.log(counter.value); // still outputs 3
