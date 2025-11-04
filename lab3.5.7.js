// 5 завдання
function getUser(id) {
  const users = [
    { id: 0, name: "Іван", age: 20, city: "Київ" },
    { id: 1, name: "Марія", age: 22, city: "Львів" },
    { id: 2, name: "Олег", age: 19, city: "Харків" },
    { id: 3, name: "Світлана", age: 25, city: "Одеса" },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((u) => u.id === id);
      if (user) resolve(user);
      else reject(new Error("User not found"));
    }, 1000);
  });
}


function loadUsers(ids) {
  const promises = ids.map((id) => getUser(id));

  return Promise.allSettled(promises).then((results) => {
    const users = [];

    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        users.push(result.value);
      } else {
        console.error(
          `Помилка при завантаженні користувача з id=${ids[index]}:`,
          result.reason?.message || result.reason
        );
      }
    });

    return users;
  });
}

// 7 завдання
loadUsers([0, 1, 5, 3]).then((users) =>
  console.log(" Отримані користувачі:", users)
);


async function showUsers(ids) {
  console.log("loading...");
  try {
    const users = await loadUsers(ids);
    console.log("Завантажені користувачі:", users);
  } catch (err) {
    console.error("Помилка:", err.message);
  } finally {
    console.log("loading finished");
  }
}

// Демонстрація
showUsers([0, 3, 4]);
