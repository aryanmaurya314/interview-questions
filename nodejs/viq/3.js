function fun1(a, b) {
  // a and b are parameters here
  console.log(a + b);
}

fun1(); // output: NaN

// 2, 4, 5, 6, 7 are arguments here
fun1(2, 4, 5, 6, 7); // output: 6

const a = [2, 4, 5, 6];

fun1(...a); // output: 6

// If number of arguments and parameter are not same
// then function will be executed with parameters value as undefined
// Note: No error will be thrown in this case
