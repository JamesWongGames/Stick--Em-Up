console.log("Sticker shop loaded");

const cart = [];

function buy(name, price) {
  cart.push({
    name: name,
    price: price,
    quantity: 1
  });

  console.log(cart);
  alert(name + " added to cart 🛒");
}

async function checkout() {
  const res = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cart)
  });

  const data = await res.json();

  if (data.url) {
    window.location.href = data.url;
  } else {
    alert("Checkout failed");
  }
}