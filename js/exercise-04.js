/*
    What would each of these lines of code do:

    1. true && console.log("moo");
    2. false && console.log("moo moo?")
    3. true || console.log("hello friend");
    4. false || console.log("bye friend");

    Once you see the results, write in a comment why it works that way
*/

// 1.
true && console.log("moo");

// 2.
false && console.log("moo moo?");

// 3.
true || console.log("hello friend");

// 4.
false || console.log("bye friend");

/*
Explanation:
- `&&` (AND) only executes the second part if the first part is true.
- `||` (OR) only executes the second part if the first part is false.

  1. `true && console.log("moo")` runs the `console.log` because the first part is true.
  2. `false && console.log("moo moo?")` doesn't run the `console.log` because the first part is false.
  3. `true || console.log("hello friend")` skips the `console.log` because the first part is true.
  4. `false || console.log("bye friend")` runs the `console.log` because the first part is false.
*/
