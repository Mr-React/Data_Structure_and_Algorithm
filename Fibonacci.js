//Big O - O(n)
function fibonanci(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// console.log(fibonanci(2));
// console.log(fibonanci(3));
// console.log(fibonanci(5));
// console.log(fibonanci(7));

//Big O - O(2^n)
function fibonanciByRecrsion(n) {
  if (n < 2) {
    return n;
  }

  return fibonanciByRecrsion(n - 1) + fibonanciByRecrsion(n - 2);
}

console.log(fibonanciByRecrsion(2));
console.log(fibonanciByRecrsion(3));
console.log(fibonanciByRecrsion(5));
console.log(fibonanciByRecrsion(7));
