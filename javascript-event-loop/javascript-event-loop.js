const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

// 2 - Phase 1 of the event loop -> timers.
setTimeout(() => {
    console.log('Timer 1 finished');
}, 0); 

// 4 - Phase 3 - special timer phase right after I/O polling
setImmediate(() => {
    console.log('Immediate Timer finished.')
});

// 3 - Phase 2 of the event loop -> I/O polling
fs.readFile('react-questions.txt', () => {
    console.log('I/O finishded');
    console.log('--------------');

    // 3rd
    setTimeout(() => {
        console.log('Timer 2 finished');
    }, 0); 

    // 4th
    setTimeout(() => {
        console.log('Timer 3 finished');
    }, 3000); 

    // 2nd
    setImmediate(() => {
        console.log('Immediate 2 Timer finished.')
    });

    // 1st
    process.nextTick(() => console.log('Process.nextTick'));

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log('Password encrypted');
        console.log(Date.now() - start);
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log('Password encrypted');
        console.log(Date.now() - start);
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log('Password encrypted');
        console.log(Date.now() - start);
    });
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log('Password encrypted');
        console.log(Date.now() - start);
    });
})

// 1 - Top level code executes before event loop starts.
console.log('Hello from the top-level code.');