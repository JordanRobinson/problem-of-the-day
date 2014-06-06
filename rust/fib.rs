fn main() {
	//very simple non-recursive fibonacci
	//would be nice to have a problem that would be more efficient by threading, but oh well

	let args = std::os::args();
	println!("{}", args);

	let mut first = 0;
	let mut second = 1;
	let mut result = 0;

	for i in range (1, 30) {
		result = first + second;
		first = second;
		second = result;
		println!("{}: {}", i, result);
	}
}