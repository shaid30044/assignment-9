1. Write the correct answer from the following options and give an explanation (2-5 lines).
   let greeting;
   greetign = {};
   console.log(greetign);
   A: {}
   B: ReferenceError: greetign is not defined
   C: undefined

Answer:B: ReferenceError: greetign is not defined

Explanation: The variable greetign is not defined in this code, so attempting to log it will result in a ReferenceError.

<!--  -->

2. Write the correct answer from the following options and give an explanation (2-5 lines).
   function sum(a, b) {
   return a + b;
   }

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3

Answer:C: "12"

Explanation: JavaScript is a dynamically typed language, and when you use the + operator with different types, it performs type coercion, converting one or both operands to a common type. In this case, it converts the number 1 to a string and then concatenates it with the string "2", resulting in the string "12". So, the function sum(1, "2") returns the string "12".

<!--  -->

3. Write the correct answer from the following options and give an explanation (2-5 lines).
   const food = ["🍕", "🍫", "🥑", "🍔"];
   const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Answer:A: ['🍕', '🍫', '🥑', '🍔']

Explanation: In the code, the food array is not modified. The info.favoriteFood property is assigned the string "🍝", but this assignment doesn't affect the food array. Therefore, when you log the food array, it remains unchanged, and the output is ['🍕', '🍫', '🥑', '🍔'].

<!--  -->

4. Write the correct answer from the following options and give an explanation (2-5 lines).
   function sayHi(name) {
   return `Hi there, ${name}`;
   }

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Answer: B: Hi there, undefined

Explanation: In the sayHi function, there is a parameter name, but when you call sayHi() without providing an argument, it doesn't receive a value for name, so name becomes undefined. Therefore, the returned string is "Hi there, undefined".

<!--  -->

5. Write the correct answer from the following options and give an explanation (2-5 lines).
   let count = 0;
   const nums = [0, 1, 2, 3];

nums.forEach((num) => {
if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4

Answer: C: 3

Explanation: The forEach method iterates through each element of the nums array and executes the provided function for each element. In the provided function, there's a conditional check if (num) which evaluates to true for all elements in the array except for the first one (0 evaluates to false in a conditional context). As a result, the count variable is incremented for each element except the first one, resulting in a final count of 3.
