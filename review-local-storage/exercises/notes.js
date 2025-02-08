const obj = { a: 1, b: 2, c: 3 };
localStorage.setItem("stored", JSON.stringify(obj));
console.log(localStorage);

const getStoredValue = localStorage.getItem("stored");
console.log(getStoredValue);

console.log(typeof getStoredValue);

const parsedStoredValue = JSON.parse(getStoredValue);
console.log(parsedStoredValue);
// {a: 1, b: 2, c: 3}

// event loop video of how javascript works
// https://youtu.be/8aGhZQkoFbQ?si=tYbdwHBl9geE4uS4
