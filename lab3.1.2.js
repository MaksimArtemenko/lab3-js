// 1 завдання
function invokeAfterDelay(fn, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn());
    }, delay);
  });
}

invokeAfterDelay(() => Math.floor(Math.random() * 11), 900)
  .then((result) => console.log("Випадкове число:", result));


// 2 завдання
function produceRandomAfterDelay(delay) {
  return invokeAfterDelay(() => Math.floor(Math.random() * 11), delay);
}


Promise.all([
  produceRandomAfterDelay(1000),
  produceRandomAfterDelay(1500),
])
  .then(([num1, num2]) => {
    console.log(`Перший: ${num1}, Другий: ${num2}, Сума: ${num1 + num2}`);
  });
