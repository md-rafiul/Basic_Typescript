function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

console.log(formatString("heLLo", false)); 
console.log(formatString("heLLo", false)); 

type Book = { title: string; rating: number };
function filterByRating(items: Book[]): Book[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let result: T[] = [];
  arrays.forEach((element) => {
    result = result.concat(element);
  });
  return result;
}

console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));

class Vehicle {
  constructor(private make: string, private year: number) {}
  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }
  getModel(): string {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
console.log(myCar.getModel()); // Output: "Model: Corolla"

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

console.log(processValue("hello")); // Output: 5;
console.log(processValue(10)); // Output: 20;

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  return products.reduce((prev, current) =>
    prev.price > current.price ? prev : current
  );
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

console.log(getMostExpensiveProduct(products)); // Output: { name: "Bag", price: 50 }

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}

console.log(getDayType(Day.Monday)); // Output: "Weekday"
console.log(getDayType(Day.Saturday)); // Output: "Weekend"

async function squareAsync(n: number): Promise<number>{
    return await new Promise<number>((resolve, reject)=>{
        if(n<0){
           reject('Error: Negative number not allowed');
        }else{
            setTimeout(() => {
                resolve( n * n);
            }, 1000)
        }    
    }) 
}

squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed