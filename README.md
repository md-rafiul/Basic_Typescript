# Basic_Typescript


## Solution file is in the 'src' folder.

1. What is the use of the keyof keyword in TypeScript? Provide an example.

Ans: The keyof keyword returns the keys of an object. It is used to create a union of the keys of a type or interface.

ex: 
```ts
type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person;
```
Now PersonKeys = "name" | "age" as name, age is keyof Person.

2. Provide an example of using union and intersection types in TypeScript.

Ans: 

Ex. of union:
```ts
function printId(id: string | number) {}
```
Ex. of intersection:
```ts
type User = {
  name: string;
};

type Admin = {
  adminLevel: number;
};

type AdminUser = User & Admin;
```
