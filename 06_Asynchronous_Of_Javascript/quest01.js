const myFirstPromise = new Promise((resolve, reject) => {
    resolve("Hello, Promise!");
});

myFirstPromise
    .then(message => {
        console.log(message);
    }
);