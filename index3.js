function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(result => {
                    results[index] = result;
                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    });
}

const promise1 = Promise.resolve("Apple");

const promise2 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Juice");
    }, 1000);
});

const promise3 = Promise.resolve("Limonad");

myPromiseAll([promise1, promise2, promise3])
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });