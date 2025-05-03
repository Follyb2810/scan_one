function Add(a: number, b: number) {
    return a + b;
  }
  
  function Join(a: string, b: string) {
    return a + b;
  }
  
  function checkNum(a: number | string, b: number | string) {
    return new Promise<string | number>((resolve, reject) => {
      if (typeof a === 'string' && typeof b === 'string') {
        resolve(Join(a, b));
      } else if (typeof a === 'number' && typeof b === 'number') {
        resolve(Add(a, b));
      } else {
        reject('Both values must be either numbers or strings of the same type');
      }
    });
  }
  checkNum(5, 10)
  .then(res => console.log('Resolved:', res)) 
  .catch(err => console.error('Rejected:', err));

checkNum("Hello, ", "World!")
  .then(res => console.log('Resolved:', res)) 
  .catch(err => console.error('Rejected:', err));

checkNum("Hello", 5)
  .then(res => console.log('Resolved:', res))
  .catch(err => console.error('Rejected:', err));