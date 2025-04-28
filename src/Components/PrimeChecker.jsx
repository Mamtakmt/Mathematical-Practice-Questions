import React, { useState } from 'react';

const PrimeChecker = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const handleCheck = (e) => {
    e.preventDefault();
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult('Please enter a valid number.');
    } else {
      setResult(isPrime(num) ? `${num} is a Prime Number` : `${num} is NOT a Prime Number`);
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: '40px auto', textAlign: 'center', fontFamily: 'Arial' }}>
      <h2>Prime Number Checker</h2>
      <form onSubmit={handleCheck}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
          style={{ padding: '8px', width: '100%', marginBottom: '10px' }}
        />
        <button type="submit" style={{ padding: '8px 12px', cursor: 'pointer' }}>Check</button>
      </form>
      {result && <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{result}</p>}
    </div>
  );
};

export default PrimeChecker;

/*---------------------Javascript code---------------------------*/

// function isPrime(num){
//   if (num<=1) return false
//   if (num==2) return true

//   for(let i=2 ; i<=num/2; i++){
//     if (num%i==0){
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(22))