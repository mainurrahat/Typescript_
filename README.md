1.What is the use of enums in TypeScript? Provide an example of a numeric and string enum?
Ans:-->
enums are a way to define a set of named constants that represent related values. They help make your code more readable and maintainable by avoiding the use of arbitrary numbers or strings directly in your code.

<!--  -->

Numeric Enum:
Numeric enums are the default in TypeScript. By default, enum members are assigned numeric values starting from 0. If you don't specify a value, TypeScript will assign the next integer starting from 0.
exmpl:
enum serial {
mainur, // 0
islam, // 1
rahat, // 2
}

console.log(Status.mainur); // 0

<!--  -->

In this example, Serial.mainur has the value 0, Serial.islam is 1, and Serial.rahat is 2. You can also manually assign values to enum members.

<!--  -->

String Enum:
While numeric enums are useful, sometimes you need to work with strings. String enums allow you to assign specific string values to each item, providing more meaningful and readable values.

enum Day {
Monday = "MONDAY",
Tuesday = "TUESDAY",
Wednesday = "WEDNESDAY",
}
console.log(Day.Monday); // "MONDAY"

<!--  -->

Here, each day of the week is assigned a string value. This makes the code more expressive, as the value itself clearly communicates its meaning.

<!-- ------------------------------- -->

2.How does TypeScript help in improving code quality and project maintainability?
Ans:-->
TypeScript helps improve code quality and project maintainability by adding types to JavaScript, which helps catch errors early, makes code easier to understand, and keeps things organized
descriving bellow:

1.Type Safety: TypeScript makes sure you're using the correct data types (like strings, numbers, etc.), reducing bugs that occur when the wrong type is used.
let name: string = "Rahat";
name = 123; // Error: Type 'number' is not assignable to type 'string',it will hover on your compiler.

<!--  -->

2.Improved Readability & Documentation: Type annotations make the code self-explanatory, so developers can easily understand what types of data are expected.

<!--  -->

3.Autocomplete: With types, IDEs can provide better auto-suggestions, making it faster and easier to write code correctly.

<!--  -->

4.Early Error Detection: TypeScript checks your code for errors while you're writing it, before it runs. This helps you find issues early, rather than during runtime.
