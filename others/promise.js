function orderMangoJuice() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) resolve("🥭 Suco de manga");
    else reject("❌ Acabou a manga");
  });
}

function orderPizza() {
  return new Promise((resolve) => setTimeout(() => resolve("🍕 Pizza de calabresa"), 3000));
}

function orderCoffee() {
  return new Promise((resolve) => setTimeout(() => resolve("☕ Café quentinho"), 2000));
}

function orderDessert() {
  return new Promise((resolve) => setTimeout(() => resolve("🍰 Bolo de murango"), 1000));
}

const routine = async () => {
  try {
    const [pizza, mango, juice, coffee, dessert] = await Promise.all([
      orderPizza(),
      orderMangoJuice(),
      orderCoffee(),
      orderDessert(),
    ]);

    console.log("Comeu tudo", [pizza, mango]);
  } catch (error) {
    console.log(error);
  }
};

routine();
