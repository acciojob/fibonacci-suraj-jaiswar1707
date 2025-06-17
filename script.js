function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

document.getElementById('calcBtn').addEventListener('click', () => {
    const input = document.getElementById('numInput').value;
    const n = Number(input);
    const resultDiv = document.getElementById('result');

    if (!Number.isInteger(n) || n < 0 || n > 50) {
        resultDiv.textContent = 'Please enter a valid integer between 0 and 50.';
        return;
    }

    const fib = fibonacci(n);
    resultDiv.textContent = `Fibonacci number #${n} is: ${fib}`;
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = fibonacci;
}
