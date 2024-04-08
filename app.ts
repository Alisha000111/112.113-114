const countries = new Map<string, string>();
countries.set("Pakistan", "Islamabad"); 
countries.set("India", "Dehli"); 
countries.set("China", "Beijing"); 
console.log(countries);
const countries = new Map<string, string>();
countries.set("USA", "Washington, D.C."); 
countries.set("France", "Paris"); 
countries.set("Japan", "Tokyo"); 
console.log(countries);
function logCapitalOfCanada(countries: Map<string, string>): void {
  if (countries.has("Canada")) {
    console.log(`The capital of Canada is ${countries.get("Canada")}`);
  } else {
    console.log("Canada is not in the Map.");
  }
}
logCapitalOfCanada(countries);
const students = new Map<number, string>();
students.set(1, "Alisha");
students.set(2, "Tania");
students.set(3, "Ifra");
students.forEach((name, id) => {
  console.log(`Student ID: ${id}, Name: ${name}`);
});