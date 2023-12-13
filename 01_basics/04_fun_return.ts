function add(num: number): number {
  return num + 2;
}

console.log("Result: ", add(10));

const getHello = (name: string): string => {
  return `Hello! ${name}`;
};

console.log(getHello("Priyaranjan"));

const heros = ["Thor", "IronMan", "SpiderMan"];
let data = heros.map((hero: string): string => {
  return `Hi ${hero}`;
});

console.log(data);

function handleError(err: string): never {
  // console.log("Error: ", err);
  throw new Error("Error: " + err);
}

export {}