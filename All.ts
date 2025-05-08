function formatString(param: string, toUpper: boolean = true): string {
  if (toUpper) {
    return param.toUpperCase();
  } else {
    return param.toLowerCase();
  }
}
function filterByRating(
  items: {
    title: string;
    rating: number;
  }[]
): {
  title: string;
  rating: number;
}[] {
  return items.filter((item) => item.rating >= 4);
}
function concatenateArrays<T>(...arrays: T[][]): T[] {
  let res: T[] = [];
  arrays.forEach((array) => res.push(...array));
  return res;
}
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year); // Calls the constructor of the parent class (Vehicle)
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value * 2;
  }
  return 0;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null; // Return null if the array is empty
  }

  // Use reduce to find the product with the highest price
  return products.reduce((mostExpensive, currentProduct) => {
    return currentProduct.price > mostExpensive.price
      ? currentProduct
      : mostExpensive;
  });
}

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
  if (day === Day.Friday || day === Day.Saturday || day === Day.Sunday) {
    return "Weekend"; //(Friday, Saturday, or Sunday) ami ei 3 ta ke weekend hisabe dhorchi
  } else {
    return "Weekday";
  }
}
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}
