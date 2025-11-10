/* ===========================================================
   Lab 1.2 – Data Types
   Primitive types, literals, typeof, and basic conversions.
   =========================================================== */

// TODO 1: Declare one variable for each primitive type discussed in the PDF.
// string, number, boolean, null, undefined
let movie = "Bronx Tail"
let rating = 6.8;
let revenue = null;
let oscars;
let inTheaters = true;

console.log("Movie", typeof movie)
console.log("Rating", typeof rating)
console.log("revenue", typeof revenue)
console.log("oscar", typeof oscars)
console.log("inTheaters", typeof inTheaters)

// TODO 2: Use typeof to log each variable's type.
// console.log(typeof s);

// TODO 3: Show string concatenation vs numeric addition using "5" and 5.
console.log("5" + 5)
console.log(5 + 5  + "5")
console.log("5" + (5 + 5))

// TODO 4: Explicit conversions using Number(), String(), Boolean()
console.log(Number("5"))
console.log(Boolean(""))
console.log(boolean("1"))
console.log(typeof String(4))

// TODO 5: NaN and isNaN: demonstrate a case where conversion fails.
console.log(isNaN("hello"))


// TODO 6: Template literals: print a line that mixes text + a variable value.

console.log(`My favorite movie is ${movie} 
   its rating on IMDB is ${rating} 
   the movie has made ${revenue} 
   at the box office and has won ${oscars} oscars 
   and is currently in theaters: ${inTheaters}`)

/* ===========================================================
   🎟 EXIT TICKET
   1. Which data type(s) did you use today and why? string, number, bollean, null 
   2. Where did you encounter type conversion (implicit or explicit)?
   3. One misconception I corrected or a tip I learned:
   4. What would you try next time to debug faster?
   =========================================================== */
