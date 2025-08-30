"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// A. Basics with Promise
// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
promise1.then((message) => console.log(message));
// 2. Write a function that returns a Promise resolving with the number 10 after 1 second.
function getNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
getNumber().then((num) => console.log("Promise then:", num));
// 3. Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
function throwError() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}
throwError().catch((err) => console.error("Promise catch:", err.message));
// 4. Use .then() and .catch() to handle a Promise that returns a random number.
// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task
// done" after time ms.
// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
// 7. Use Promise.race() to return whichever Promise resolves first.
// 8. Create a Promise chain: square the number 2, then double it, then add 5.
// 9. Write a Promise that reads an array after 1 second and filters even numbers.
// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).
//# sourceMappingURL=phanA.js.map