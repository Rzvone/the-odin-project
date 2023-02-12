// 1

function troubleshooting() {
    const a = 1;
    const b = 1;

    let result;

    result = a + b; // result was composed as 2 strings and returned 11 instead of 2

    return result;
};

console.log(troubleshooting())