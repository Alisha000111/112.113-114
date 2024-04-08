var countries = new Map();
countries.set("Pakistan", "Islamabad");
countries.set("India", "Dehli");
countries.set("China", "Beijing");
console.log(countries);
var countries = new Map();
countries.set("USA", "Washington, D.C.");
countries.set("France", "Paris");
countries.set("Japan", "Tokyo");
console.log(countries);
function logCapitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log("The capital of Canada is ".concat(countries.get("Canada")));
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
logCapitalOfCanada(countries);
var students = new Map();
students.set(1, "Alisha");
students.set(2, "Tania");
students.set(3, "Ifra");
students.forEach(function (name, id) {
    console.log("Student ID: ".concat(id, ", Name: ").concat(name));
});
