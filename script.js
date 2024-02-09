//your JS code here. If required.
function processData(inputArray) {
    // Create a promise that resolves after 3 seconds with the inputArray
    const initialPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(inputArray);
        }, 3000);
    });

    // Chain the promises
    initialPromise
        .then((resultArray) => {
            // Filter out odd numbers after 1 second
            return new Promise((resolve) => {
                setTimeout(() => {
                    const filteredArray = resultArray.filter(num => num % 2 === 0);
                    resolve(filteredArray);
                }, 1000);
            });
        })
        .then((filteredArray) => {
            // Multiply even numbers by 2 after 2 seconds
            return new Promise((resolve) => {
                setTimeout(() => {
                    const multipliedArray = filteredArray.map(num => num * 2);
                    resolve(multipliedArray);
                }, 2000);
            });
        })
        .then((finalResult) => {
            // Update the text of the HTML element with id "output"
            const outputElement = document.getElementById("output");
            outputElement.textContent = finalResult.join(", ");
        })
        .catch((error) => {
            console.error("An error occurred:", error);
        });
}

// Example usage:
const inputArray = [1, 2, 3, 4];
processData(inputArray);
