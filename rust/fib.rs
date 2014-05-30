fn main() {
	let mut first = 1;
	let mut second = 1;
	let mut next = 0;

	for x in range (1, 100) {
		next = first;
		first = first + second;
		second = next;
		println!("{} ", first);
	}
}