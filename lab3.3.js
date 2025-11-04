function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Демонстрація
async function testSleep() {
  console.log("Пауза 3 сек...");
  await sleep(3000);
  console.log("Продовжуємо");
}
testSleep();
