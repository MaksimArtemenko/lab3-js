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

// Демонстрація
getUser(2)
  .then((user) => console.log("Користувач:", user))
  .catch((err) => console.error(err.message));
