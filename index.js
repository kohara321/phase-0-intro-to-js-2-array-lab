// Write your solution here
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
}

function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(Broom) {
    const newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat(Arnold) {
    const addCats = ["Arnold", ...cats];
    return addCats
}

function removeLastCat() {
    const lessCats = cats.slice(0, cats.length -1);
    return lessCats;
}

function removeFirstCat() {
    const lostCats = cats.slice(1);
    return lostCats;
}

