import React, { useState } from 'react';

const FibonacciSeries = () => {
    const [count, setCount] = useState('');
    const [series, setSeries] = useState([]);

    const generateFibonacci = (n) => {
        const fib = [];
        for (let i = 0; i < n; i++) {
            if (i === 0) fib.push(0);
            else if (i === 1) fib.push(1);
            else fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const n = parseInt(count);
        if (!isNaN(n) && n >= 0) {
            const result = generateFibonacci(n);
            setSeries(result);
        } else {
            setSeries(['Please enter a valid non-negative number']);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial' }}>
            <h2>Fibonacci Series Generator</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    placeholder="Enter number of terms"
                    style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
                />
                <button type="submit" style={{ padding: '10px', width: '100%' }}>Generate</button>
            </form>
            <div style={{ marginTop: '20px' }}>
                <strong>Series:</strong>
                <p>{series.join(', ')}</p>
            </div>
        </div>
    );
};

export default FibonacciSeries;


//-------------------------------------js functionality------------------------------//

/*let num = 10;

let a = 0;
let b = 1;

console.log(fibonaccie series is:);

for(let i=0;i<num;i++){
console.log(a);
let next = (a+b)

a=b;
b=next
}

*/