// Primitives: number,  string, boolean
// Complex Types: arrays, objects
// Type Inference
// Union Types
// Type Aliases
// Function Types, parameters

/* -------------------------------------------------------------------------- */
/*                                 Primitives                                 */
/* -------------------------------------------------------------------------- */

// default type - don't assign any type! So, any type is allowed!
// It should be used very rarely;

/* let person: any; === let person;  */
let person: any;

let age: number = 24;
let username: string = "John";
let isLoggedin: boolean = false;

/* -------------------------------------------------------------------------- */
/*                                Complex types                               */
/* -------------------------------------------------------------------------- */

// array must contain only strings
let hobbies: string[] = ["read", "swim", "sing"];
// array must contain only numbers
let kilometres: number[] = [56, 899, 120];
// array must contain only booleans
let isMerried: boolean[] = [true, false];

/* -------------------------------------------------------------------------- */

// define inline structure of an object
let user: {
	name: string;
	age: number;
};

user = {
	name: "Jonathan",
	age: 45,
};

/* -------------------------------------------------------------------------- */

// define an Array which contains Object with specific structure
let people: {
	name: string;
	age: number;
}[];

people = [
	{
		name: "Jonathan",
		age: 45,
	},
	{
		name: "Nino",
		age: 20,
	},
];

/* -------------------------------------------------------------------------- */

// Type Inference
// type inference is used to provide type information when there is no explicit type annotation.
// If you immediately initialize variable without type, typescript will look at the value type here - so, it will see that we stored a string in that variable. And it will then use that value type as an inferred type for this variable. And if you then try to assign a different type thereafter, you will get an error because of type inference;

let course = "Hello World";
course = 788;

/* -------------------------------------------------------------------------- */

// Union Types
let measure: string[] | number = 6788;
let movie: number | string | boolean = false;

measure = ["100km", "20 meter"];
movie = "Lord of Rings";

/* -------------------------------------------------------------------------- */

// Type Aliases
// Aliases and Interfaces allows types to be easily shared between different variables/objects.
// Interfaces are similar to type aliases, except they only apply to object types.
// Type aliases are difing with keyword `type`.

/* 
type Neighbor = {
	name: string;
	age: number;
}

let member: {
	name: string;
	age: number;
};
let neighborhood: {
	name: string;
	age: number;
}[];

👆👆👆＝＝＝👇👇👇
*/

type Neighbor = {
	name: string;
	age?: number;
};

let member: Neighbor;
let neighborhood: Neighbor[];

member = {
	name: "Tornike",
	//age does not exist
};
