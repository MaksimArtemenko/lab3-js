function logCall(callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const now = new Date().toLocaleTimeString();
      console.log("Час виклику:", now);
      callback();
      resolve();
    }, 1000);
  });
}

// Ланцюжок з 4 викликів
logCall(() => console.log("1-й виклик"))
  .then(() => logCall(() => console.log("2-й виклик")))
  .then(() => logCall(() => console.log("3-й виклик")))
  .then(() => logCall(() => console.log("4-й виклик")));
