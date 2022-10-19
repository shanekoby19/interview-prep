const fs = require('fs')

const withdrawl = (amt) => {
    const balance = 100;

    return new Promise((resolve, reject) => {
        const newAmt = balance - amt;
        if(newAmt >= 0) {
            resolve(newAmt)
        } else {
            reject(new Error(`Insufficent funds - $${balance} `));
        }
    });
}

fs.readFile('../react-questions.txt', () => {
    // Success - Resolve
    setTimeout(async () => {
        const result = await withdrawl(20);
        console.log(result);
    });

    // Error - Reject
    setImmediate(async () => {
        try {
            const result = await withdrawl(120);
            console.log(result);
        } catch(error) {
            console.log(error);
        }
    });

    process.nextTick(() => {
        console.log('Will run first.')
    })
})